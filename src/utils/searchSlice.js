import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchedMovies: null,
  },
  reducers: {
    addSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
    clearSearchedMovies: (state) => {
      state.searchedMovies = null;
    },
  },
});

export const { addSearchedMovies, clearSearchedMovies } = searchSlice.actions;

export default searchSlice.reducer;
