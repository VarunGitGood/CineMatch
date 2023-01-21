const ErrorResponse = require("../middleware/errorResponse");
const User = require("../models/User");
const asyncHandler = require("../middleware/async");

exports.createUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return next(
      new ErrorResponse(`Please provide name, email and password`, 400)
    );
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  sendTokenResponse(user, 200, res);
});

exports.loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorResponse(`Please provide email and password`, 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorResponse(`Invalid credentials`, 401));
  }
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse(`Invalid credentials`, 401));
  }
  sendTokenResponse(user, 200, res);
});

exports.followUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return next(new ErrorResponse(`User not found with id of ${id}`, 404));
  }
  if (user.followers.includes(req.user.id)) {
    return next(new ErrorResponse(`You already follow this user`, 400));
  }
  user.followers.push(req.user.id);
  await user.save();
  res.status(200).json({
    success: true,
    data: `You are now following ${user.name}`,
  });
});

exports.unfollowUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return next(new ErrorResponse(`User not found with id of ${id}`, 404));
  }
  if (!user.followers.includes(req.user.id)) {
    return next(new ErrorResponse(`You don't follow this user`, 400));
  }
  user.followers.pull(req.user.id);
  await user.save();
  res.status(200).json({
    success: true,
    data: `You are no longer following ${user.name}`,
  });
});
