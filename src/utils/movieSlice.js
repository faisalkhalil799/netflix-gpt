import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieslist",
  initialState: { nowPlayingMovies: null },
  reducers: {
    addMovieToList: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
  },
});

export const { addMovieToList } = movieSlice.actions;
export default movieSlice.reducer;
