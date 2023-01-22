import requests
from bs4 import BeautifulSoup
import csv
max_tiles = 9995849 

url = 'https://www.imdb.com/search/title/?year=2000-01-01,2024-12-31&start='

for i in range(1, max_tiles, 50):

        result = requests.get(url + str(i)).text
        doc = BeautifulSoup(result, "html.parser")
        main_data = doc.find(class_ = "lister-list")
        for movie in main_data.find_all(class_ = "lister-item-content"):
            try:
                title = movie.find(class_ = "lister-item-header").find("a").text
                year = movie.find(class_ = "lister-item-year").text.replace("(", "").replace(")", "")
                description = movie.find_all('p')[1].text
                rating = movie.find(class_ = "ratings-imdb-rating").find("strong").text
                genre = movie.find(class_ = "genre").text
                votes = movie.find(class_ = "sort-num_votes-visible").find_all("span")[1].text
                cast = ""
                for actor in movie.find_all("p")[2].find_all("a"):
                    # cast.append(actor.text)
                    cast += actor.text + ","
                    poster = main_data.find(class_ = "lister-item-image").find("img")["loadlate"]
                with open("movies.csv", "a") as f:
                    writer = csv.writer(f)
                    writer.writerow([title, year, description, rating, genre, votes, cast, poster])
           
            except Exception as e:
                    print(e)
                    pass
        print(i)
