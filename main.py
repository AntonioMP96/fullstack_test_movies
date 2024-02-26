from fastapi import FastAPI
from os import environ as env
import requests

app = FastAPI()

@app.get("/{page}")
def index(page: int):
    res = {
        "movies": query_movies('discover', page=page if page else 1)
    }
    return res


@app.get("/movie/{movie_id}")
def get_movie_details(movie_id: int):
    res = {
        "details": query_movies('movie', movie_id=movie_id)
    }
    return res


@app.get("/{page}/search/{search}")
def search_movies(page: int, search: str):
    res = {
        "movies": query_movies('search', search=search, page=page if page else 1)
    }
    return res


def query_movies(type: str, **kwargs):
    common_params = "&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc"
    types = {
        'discover': f"/discover/movie?&page={kwargs['page'] if 'page' in kwargs else 1}{common_params}",
        'movie': f"/movie/{kwargs['movie_id'] if 'movie_id' in kwargs else ''}",
        'search': f"/search/movie?query={kwargs['search'] if 'search' in kwargs else ''}&page={kwargs['page'] if 'page' in kwargs else 1}{common_params}"
    }
    url = f"https://api.themoviedb.org/3/" + types[type]
    
    headers = {
        "Authorization" : "Bearer " + env['API_AUTH_TOKEN'],
        "accept": "application/json"
    }
    response = requests.get(url, headers=headers)
    data = response.json()

    return data
