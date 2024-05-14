import { Link } from "react-router-dom";

import { IMG_URL } from "../utils/constants";

const MovieCard = ({ movie, genres }) => {
  return (
    <div className="movie-card">
      <div>
        <img
          className="movie-img"
          alt={movie.original_title}
          src={IMG_URL + movie.poster_path}
        />
      </div>
      <div>
        <Link className="movie-link" to={"movies/" + movie.id}>
          <div className="movie-title">{movie.original_title}</div>
        </Link>
        <div className="movie-description">{movie.overview}</div>
        <div className="genres-list">
          {movie.genre_ids?.map((genre) => {
            let genreIndex = 0;
            while (
              genreIndex < genres.length &&
              genres[genreIndex]?.id !== genre
            )
              genreIndex++;
            return (
              <span key={genre} className="genre-tag">
                {genres[genreIndex]?.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
