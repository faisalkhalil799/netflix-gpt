import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./constants";
import { addMovieToList } from "./movieSlice";

const useFetchMoviesData = () => {
  const dispatch = useDispatch();
  const fetchMoviesList = async () => {
    const moviesList = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS,
    );
    const jsondata = await moviesList.json();
    dispatch(addMovieToList(jsondata));
  };

  useEffect(() => {
    fetchMoviesList();
  }, []);
};

export default useFetchMoviesData;
