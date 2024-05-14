import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { IMG_URL } from "../utils/constants";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const [movieDetails, setMoviesDetails] = useState({});

  const fetchMovieCast = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/credits?api_key=2dca580c2a14b55200e784d157207b4d"
      )
      .then((data) => setCastList(data.data.cast));
  };

  const fetchMovieData = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "?api_key=2dca580c2a14b55200e784d157207b4d"
      )
      .then((data) => setMoviesDetails(data.data));
  };

  useEffect(() => {
    fetchMovieCast();
    fetchMovieData();
  }, []);

  return (
    <div className="movie-content">
      <div>
        <img
          className="movie-content-img"
          alt={movieDetails.original_title}
          src={IMG_URL + movieDetails.poster_path}
        />
      </div>
      <div className="movie-details">
        <div className="movie-content-title">{movieDetails.original_title}</div>
        <div className="movie-content-description">{movieDetails.overview}</div>
        <div className="genres-list">
          {movieDetails.genres?.map((genre) => {
            return (
              <span key={genre.id} className="genre-tag">
                {genre.name}
              </span>
            );
          })}
        </div>
        <div className="cast">
          {castList.map((cast) => {
            return (
              <div className="cast-card">
                <img
                  className="cast-img"
                  src={
                    cast.profile_path
                      ? IMG_URL + cast.profile_path
                      : "https://www.gstatic.com/knowledgecard/person-95.png"
                  }
                  alt={cast.name}
                />
                <p className="cast-character">{cast.character}</p>
                <p className="cast-name">{cast.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
