const Filter = ({
  genres,
  filteredGenres,
  setFilteredGenres,
  setMovieList,
  setOlderMovisList,
  setActiveYear,
  setOlderYear,
}) => {
  const handleSelect = (id) => {
    if (filteredGenres.includes(id)) {
      setFilteredGenres(filteredGenres.filter((genreId) => genreId !== id));
    } else {
      setFilteredGenres([...filteredGenres, id]);
    }

    setMovieList([]);
    setOlderMovisList([]);
    setActiveYear(2012);
    setOlderYear(2011);
  };

  return (
    <div className="filter">
      {genres.map((genre) => {
        return (
          <p
            key={genre.id}
            className={
              filteredGenres.includes(genre.id)
                ? "genre-selected"
                : "genre-unselected"
            }
            onClick={() => handleSelect(genre.id)}
          >
            {genre.name}
          </p>
        );
      })}
    </div>
  );
};

export default Filter;
