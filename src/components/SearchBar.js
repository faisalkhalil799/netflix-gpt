import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSearchedMovies, clearSearchedMovies } from "../utils/searchSlice";
import { mockGPTResponse } from "../utils/openAI";
import LANG from "../utils/languageConstants";

const SearchBar = ({ language }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const searchResults = useSelector((store) => store.moviesList?.searchResults);
  console.log(searchResults, "111111");
  const handleSearch = async () => {
    // mocked GPT keywords
    const keywords = mockGPTResponse;

    const moviePromises = keywords.map((movie) =>
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS,
      ).then((res) => res.json()),
    );

    const results = await Promise.all(moviePromises);

    // flatten results
    const movies = results.flatMap((r) => r.results);

    dispatch(addSearchedMovies(movies));
  };

  const handleClear = () => {
    inputRef.current.value = "";
    dispatch(clearSearchedMovies());
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div
        className="w-full max-w-3xl bg-black/70 backdrop-blur-xl 
                      p-8 rounded-xl border border-gray-700 shadow-2xl"
      >
        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          Find your next favorite movie 🎬
        </h2>

        <div className="flex gap-3">
          <input
            ref={inputRef}
            className="flex-1 px-5 py-4 rounded-lg bg-gray-900 text-white
                       placeholder-gray-400 border border-gray-700
                       focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder={LANG[language].searchPlaceholder}
          />

          <button
            onClick={handleSearch}
            className="bg-red-600 px-8 py-4 rounded-lg text-white font-semibold
                       hover:bg-red-700 active:scale-95 transition-all"
          >
            {LANG[language].searchButton}
          </button>

          <button
            onClick={handleClear}
            className="bg-gray-700 px-6 py-4 rounded-lg text-white
                         hover:bg-gray-600 transition-all"
          >
            {LANG[language].clearButton}
          </button>
        </div>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Powered by GPT • Example: “Action thrillers like John Wick”
        </p>
      </div>
    </div>
  );
};

export default SearchBar;
