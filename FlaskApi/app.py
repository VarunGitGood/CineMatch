from flask import Flask, jsonify, request
import pickle
import numpy as np
import pandas as pd

app = Flask(__name__)

# with open('recommend.pkl', 'rb') as f:
#         recommend1 = pickle.load(f)
with open('similarity_genre.pkl', 'rb') as f:
    gen_similarity = pickle.load(f)
with open('similarity_recommend.pkl', 'rb') as f:
    similarity = pickle.load(f)
with open('movie_list.pkl', 'rb') as f:
    movie_list = pickle.load(f)


@app.route('/', methods=['GET'])
def hello():
    return "HELLO"


@app.route("/recommend", methods=["POST"])
def recommend():
    movie = request.json["movie"]
    movie_index = movie_list[movie_list['title'] == movie].index[0]
    distances = similarity[movie_index]
    movies_list = sorted(list(enumerate(distances)),
                         reverse=True, key=lambda x: x[1])[0:5]
    print((movies_list))
    for i in movies_list:
        print(movie_list.iloc[i[0]].title)


@app.route("/genre_recommendation", methods=["POST"])
def recommend_genre():
    genres_list = request.json["genres"]
    movie_indices = [i for i, gen in enumerate(
        movie_list['genres']) if all(g in gen for g in genres_list)]
    genre_similarity = gen_similarity[movie_indices].mean(axis=0)
    genre_similarity = genre_similarity.argsort()[::-1]
    recommended_movies = []
    for i in genre_similarity[:10]:
        print(movie_list.iloc[i])
        recommended_movies.append(movie_list.iloc[i].to_dict())
    return jsonify({"data": recommended_movies})


@app.route('/genres', methods=["GET"])
def get_genres():
    dataset = pd.read_csv('movies1.csv')
    for i in range(len(dataset['genres'])):
        dataset['genres'][i] = dataset['genres'][i].replace(
            '[', '').replace(']', '').split(',')
        for j in range(0, len(dataset['genres'][i])):
            dataset['genres'][i][j] = dataset['genres'][i][j].strip()
    list2 = []
    for i in range(len(dataset['genres'])):
        for j in range(len(dataset['genres'][i])):
            list2.append(dataset['genres'][i][j])

    return jsonify({"data": list(set(list2))})


if __name__ == '__main__':
    app.run(debug=True)
