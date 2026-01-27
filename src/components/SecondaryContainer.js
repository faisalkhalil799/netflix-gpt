import { useSelector } from "react-redux";
import MovieList from "./MoviesList";

const SecondaryContainer = () => {
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    useSelector((store) => store.moviesList);

  return (
    <div className="bg-black z-20 relative">
      <div className="-mt-40">
        <MovieList title="Now Playing" movies={nowPlayingMovies?.results} />

        <MovieList title="Popular Movies" movies={popularMovies?.results} />

        <MovieList title="Top Rated Movies" movies={topRatedMovies?.results} />

        <MovieList title="Upcoming Movies" movies={upcomingMovies?.results} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
