import { useState, useEffect } from "react";

import Header from "./Header";
import Filter from "./Filter";
import Content from "./Content";
import { GENRE_LIST } from "../utils/constants";

const HomePage = () => {
  const [genres, setGenres] = useState([]);
  const [filteredGenres, setFilteredGenres] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [olderMovieList, setOlderMovisList] = useState([]);
  const [activeYear, setActiveYear] = useState(2012);
  const [olderYear, setOlderYear] = useState(2011);

  const fetchGenres = async () => {
    const data = await fetch(GENRE_LIST);
    const json = await data.json();
    setGenres(json.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div className="homepage">
      <div className="nav-bar">
        <Header
          setSearchText={setSearchText}
          setMovieList={setMovieList}
          setOlderMovisList={setOlderMovisList}
          setActiveYear={setActiveYear}
          setOlderYear={setOlderYear}
        />
        <Filter
          genres={genres}
          filteredGenres={filteredGenres}
          setFilteredGenres={setFilteredGenres}
          setMovieList={setMovieList}
          setOlderMovisList={setOlderMovisList}
          setActiveYear={setActiveYear}
          setOlderYear={setOlderYear}
        />
      </div>
      <Content
        genres={genres}
        filteredGenres={filteredGenres}
        searchText={searchText}
        movieList={movieList}
        olderMovieList={olderMovieList}
        setMovieList={setMovieList}
        setOlderMovisList={setOlderMovisList}
        activeYear={activeYear}
        olderYear={olderYear}
        setActiveYear={setActiveYear}
        setOlderYear={setOlderYear}
      />
    </div>
  );
};

export default HomePage;
