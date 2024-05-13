import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import MoviesContainer from "./MoviesContainer";
import ShimmerUI from "./ShimmerUI";
import Error from "./Error";

const Content = ({
  genres,
  filteredGenres,
  searchText,
  activeYear,
  setActiveYear,
  olderYear,
  setOlderYear,
}) => {
  const [error, setError] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const [olderMovieList, setOlderMovisList] = useState([]);

  const fetchNewMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=" +
          activeYear.toString() +
          "&page=1&vote_count.gte=100"
      );
      const json = await data.json();

      const newMovies = {
        year: activeYear,
        results: json.results
          ?.map((movie, index) => {
            let isGenre = filteredGenres.length === 0 ? true : false;
            let showCard = true;

            for (let i = 0; i < filteredGenres.length; i++) {
              if (movie.genre_ids.includes(filteredGenres[i])) {
                isGenre = true;
              }
            }

            if (searchText.length > 0) {
              if (movie.original_title.includes(searchText)) showCard = true;
              else showCard = false;
            }

            if (isGenre && showCard) return movie;
          })
          .filter((movie) => movie),
      };

      if (activeYear === 2012) setMovieList([newMovies]);
      else setMovieList([...movieList, newMovies]);

      setActiveYear(activeYear + 1);
    } catch (error) {
      setError(error);
    }
  };

  const fetchOldMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=" +
          olderYear.toString() +
          "&page=1&vote_count.gte=100"
      );
      const json = await data.json();

      const newMovies = {
        year: olderYear,
        results:
          json.results
            ?.map((movie, index) => {
              let isGenre = filteredGenres.length === 0 ? true : false;
              let showCard = true;

              for (let i = 0; i < filteredGenres.length; i++) {
                if (movie.genre_ids.includes(filteredGenres[i])) {
                  isGenre = true;
                }
              }

              if (searchText.length > 0) {
                if (movie.original_title.includes(searchText)) showCard = true;
                else showCard = false;
              }

              if (isGenre && showCard) return movie;
            })
            .filter((movie) => movie) || [],
      };

      if (olderYear === 2011) setOlderMovisList([newMovies]);
      else setOlderMovisList([...olderMovieList, newMovies]);

      setOlderYear(olderYear - 1);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      let divElement = document.getElementById("show-content");
      divElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);

    fetchNewMovies();
    fetchOldMovies();
  }, [filteredGenres, searchText]);

  if (error) return <Error />;

  return (
    <div className="content">
      <div id="scrollableDiv" className="inverse-scroll">
        <InfiniteScroll
          dataLength={olderMovieList.length}
          next={fetchOldMovies}
          style={{
            display: "flex",
            flexDirection: "column-reverse",
          }}
          inverse={true}
          hasMore={true}
          loader={<ShimmerUI />}
          endMessage={<p className="no-movies">No more data to load.</p>}
          scrollableTarget="scrollableDiv"
        >
          {olderMovieList?.map((item) => {
            return (
              <div>
                <MoviesContainer
                  key={item.year}
                  movies={item.results}
                  year={item.year}
                  genres={genres}
                  filteredGenres={filteredGenres}
                  searchText={searchText}
                />
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
      <div id="show-content">
        <InfiniteScroll
          dataLength={movieList.length}
          next={fetchNewMovies}
          hasMore={activeYear <= 2024}
          loader={<ShimmerUI />}
          endMessage={<p>No more data to load.</p>}
        >
          {movieList?.map((item) => {
            return (
              <MoviesContainer
                key={item.year}
                movies={item.results}
                year={item.year}
                genres={genres}
                filteredGenres={filteredGenres}
                searchText={searchText}
              />
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Content;
