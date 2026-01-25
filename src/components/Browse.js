import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = async () => {
    try {
      await signOut(auth); //  sign out from Firebase
      dispatch(removeUser()); //  clear Redux
      navigate("/"); //  redirect
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header />

      {/* User Info (Top Right) */}
      <div className="absolute top-4 right-6 flex items-center gap-3">
        <p className="text-white font-semibold text-sm hidden sm:block">
          {user?.name}
        </p>

        <img
          src={
            user?.photoUrl ||
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
          }
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-white cursor-pointer hover:scale-105 transition"
          onClick={handleSignOut}
        />
      </div>
    </div>
  );
};

export default Browse;
