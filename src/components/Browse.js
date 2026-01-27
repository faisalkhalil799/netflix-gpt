import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import { removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { AVATAR } from "../utils/constants";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import usePopularMovies from "../utils/usePopularMovies";
import useTopRatedMovies from "../utils/useTopRatedMovies";
import useUpcomingMovies from "../utils/useUpcomingMovies";

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import SearchBar from "./SearchBar";
import { useState } from "react";
import SearchResult from "./SearchResult";

const Browse = () => {
  const dispatch = useDispatch();
  const [visible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState("english");

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const user = useSelector((store) => store?.user);
  const moviesList = useSelector(
    (store) => store?.moviesList?.nowPlayingMovies?.results,
  );
  const movieData = moviesList?.[1];
  const handleSignOut = async () => {
    try {
      await signOut(auth); //  sign out from Firebase
      dispatch(removeUser()); //  clear Redux
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Header />

      {/* User Info (Top Right) */}
      <div className="absolute top-4 right-6 flex items-center gap-3 z-50">
        {/* Language Select */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-black/70 text-white text-sm px-3 py-2 rounded-md border border-gray-600 
               focus:outline-none focus:ring-2 focus:ring-red-600 hover:border-gray-400"
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>
        </select>

        {/* GPT Search Button */}
        <button
          onClick={() => setIsVisible(!visible)}
          className="bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md
               hover:bg-red-700 active:scale-95 transition-all duration-200"
        >
          {visible ? "Home" : "GPT Search"}
        </button>

        {/* User Name */}
        <p className="text-white font-semibold text-sm hidden sm:block">
          {user?.name}
        </p>

        {/* Avatar */}
        <img
          src={user?.photoUrl || AVATAR}
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-white cursor-pointer 
               hover:scale-105 transition-transform duration-200"
          onClick={handleSignOut}
        />
      </div>

      {visible ? (
        <>
          <SearchBar language={language} />
          <SearchResult />
        </>
      ) : (
        <>
          <MainContainer movieData={movieData} />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
