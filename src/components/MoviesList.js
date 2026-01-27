import { IMAGE_CDN_LINK } from "../utils/constants";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies?.length) return null;

  return (
    <div className="px-6 mb-8">
      {/* Category Title */}
      <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>

      {/* Horizontal Scroll */}
      <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
        {movies.map(
          (movie) =>
            movie.poster_path && (
              <MovieCard
                key={movie.id}
                posterPath={IMAGE_CDN_LINK + movie.poster_path}
              />
            ),
        )}
      </div>
    </div>
  );
};

export default MovieList;
