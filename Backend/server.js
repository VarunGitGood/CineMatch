const express = require("express");
const dot = require("dotenv");
const colors = require("colors");
const errorHandler = require("./middleware/error");
const connection = require("./config/db");
const cors = require("cors");
// loading env variables from env
dot.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 8000;

//db connected
connection();

const app = express();
//using parser
app.use(express.json());

//mounting middleware
app.use(cors())
app.use(errorHandler);

//handler for unhandled errors
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}\nClosing server`.bold.red);
  server.close(() => {
    process.exit(1);
  });
});

const server = app.listen(PORT, () => {
  console.log(
    `The Server is running in ${process.env.NODE_ENV} mode on ${PORT}`.green
  );
});