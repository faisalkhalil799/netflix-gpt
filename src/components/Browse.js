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

const Browse = () => {
  const dispatch = useDispatch();
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
        <p className="text-white font-semibold text-sm hidden sm:block">
          {user?.name}
        </p>

        <img
          src={user?.photoUrl || AVATAR}
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-white cursor-pointer hover:scale-105 transition"
          onClick={handleSignOut}
        />
      </div>
      <MainContainer movieData={movieData} />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
