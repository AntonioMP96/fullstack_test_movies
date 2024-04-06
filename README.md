# fullstack_test_movies
Movie information App made with NextJS and FastAPI.

### First you'll need a TMDB API Access Token:
- Enter tmdb.org and create an account
- Go to the API section: https://www.themoviedb.org/settings/api and save the API Access Token (the largest string)

## To run the app:
- Clone the project from this repository
- In the command prompt/terminal, enter the project and then enter a folder called "movie_page_test"
- Once inside the "movie_page_test" folder, execute "npm install next@latest" and wait till the installation finishes
- In the root folder (besides the .env.example file), create a new file, save it as ".env" and inside it, copy the content from .env.example and fill the variables with the date from https://www.themoviedb.org/settings/api
- Make sure to have Docker Desktop installed and open it
- Once docker engine is running, run:
- "docker-compose up --build" if it is the first time you run the project
- Wait till the containers end installing the required dependencies.
- Once it finishes, you can acces the app through: "http://localhost:3000" or "http://127.0.0.1:3000" on any web browser.
