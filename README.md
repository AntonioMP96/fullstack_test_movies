# fullstack_test_movies
Movie information App with NextJS and FastAPI

### First you'll need a TMDB API Access Token:
- Enter tmdb.org and create an account
- Go to the API section: https://www.themoviedb.org/settings/api and save the API Access Token (the largest string)

## To run the app:
- Clone the project from this repository
- In the terminal, enter the project and then enter a folder called "movie_page_test"
- Once inside the "movie_page_test" folder, execute "npm install next@latest" wait till the installation finishes
- in the root folder, create a .env file and create a new variable called "API_ACCESS_TOKEN" then set the API Access Token from TMDB page
- Make sure to have Docker Desktop installed and open it
- Once docker engine is running, run:
- "docker-compose up --build" if it is the first time you run the project
- Wait till the "frontend" container ends installing some extra dependencies.
- Once it finishes, you can acces the app through: "localhost:3000" or "127.0.0.1:3000"
