# MovieFlix

This application consists of movie information and displays year-wise list of movies from The Movie DataBase (TMDb) API.

## Requirements

- By default, when a user lands on the page, display a list of movies of the year 2012.
- Should load a list of 20 movies for each year sorted in descending order of popularity.
- Each Movie Card should show the movie title, image, genre and a short description related to the movie.
- Implement smooth scrolling behavior to load more movies as the user scrolls in any direction
- Provide a filter UI that allows users to filter movies by genre.
- When a user selects one or more genres, the list should only display movies of the selected genres.

### Bonus Requirements

- Ensuring smooth scrolling even when more and more movies are loaded in the DOM.
- Implement a search bar which searches for the movie based on the search string and displays an infinite loading list of movies which matches the search.
- When clicked on the movie title, go to the movie details page which shows more information about the movie - Title, Description, Movie Image and Cast details.

## Steps to run the application:

Note: Make sure to have git and npm installed on your system.

Open the terminal or command prompt and navigate to the directory where you want to store the React project. Then, run the following commands one by one in the same order to clone the repository:

```bash
  git clone https://github.com/bhamini1112/movie-flix.git
```

```bash
  cd movie-flix
```

```bash
  npm i
```

```bash
  npm audit fix
```

```bash
  npm start
```

The project will open on localhost:3000

## Screenshots

![App Screenshot](src/utils/Screenshot%202024-05-14%20153104.png)

![App Screenshot](src/utils/Screenshot%202024-05-14%20153131.png)
