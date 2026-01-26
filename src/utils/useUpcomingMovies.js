import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./constants";
import { addUpcomingMovies } from "./movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const fetchMoviesList = async () => {
    const moviesList = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS,
    );
    const jsondata = await moviesList.json();
    dispatch(addUpcomingMovies(jsondata));
  };

  useEffect(() => {
    fetchMoviesList();
  }, []);
};

export default useNowPlayingMovies;
