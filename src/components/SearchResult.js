import { useSelector } from "react-redux";
import MovieList from "./MoviesList";

const SearchResult = () => {
  const searchedMovies = useSelector((store) => store.search?.searchedMovies);

  if (!searchedMovies?.length) return null;

  return (
    <div className="relative z-20 -mt-20">
      <MovieList title="Searched Results" movies={searchedMovies} />
    </div>
  );
};

export default SearchResult;
