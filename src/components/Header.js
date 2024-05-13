import { useState } from "react";

const Header = ({
  setSearchText,
  setMovieList,
  setOlderMovisList,
  setActiveYear,
  setOlderYear,
}) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    setSearchText(searchInput);
    setMovieList([]);
    setOlderMovisList([]);
    setActiveYear(2012);
    setOlderYear(2011);
  };

  return (
    <div className="header">
      <h1 className="app-title">MOVIE FLIX</h1>
      <div className="search-filter">
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
