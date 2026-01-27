import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import searchReducer from "./searchSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    moviesList: movieSlice,
    search: searchReducer,
  },
});

export default appStore;
