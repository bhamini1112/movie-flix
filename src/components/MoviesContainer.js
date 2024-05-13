import MovieCard from "./MovieCard";

const MoviesContainer = ({ movies, year, genres }) => {
  return (
    <div className="content-by-year">
      <h1 className="year">{year}</h1>
      <div className="movies-container">
        {movies?.length > 0 ? (
          movies?.map((movie) => {
            return (
              movie && (
                <MovieCard movie={movie} key={movie.id} genres={genres} />
              )
            );
          })
        ) : (
          <h3 className="no-movies">No Movies to display...</h3>
        )}
      </div>
    </div>
  );
};

export default MoviesContainer;
