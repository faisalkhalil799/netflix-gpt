import { useState, useRef } from "react";
import Header from "./Header";
import formValidate from "../utils/formValidate";
import { auth } from "../utils/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn((prev) => !prev);
    setErrors({}); // clear errors when switching
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameValue = name?.current?.value || "";
    const emailValue = email?.current?.value || "";
    const passwordValue = password?.current?.value || "";

    const validationErrors = formValidate(
      nameValue,
      emailValue,
      passwordValue,
      isSignIn,
    );

    setErrors(validationErrors);

    // Stop if validation fails
    if (Object.keys(validationErrors).length !== 0) return;

    try {
      if (isSignIn) {
        await signInWithEmailAndPassword(auth, emailValue, passwordValue);

        navigate("/browse");
      } else {
        await createUserWithEmailAndPassword(auth, emailValue, passwordValue);

        await updateProfile(auth.currentUser, {
          displayName: "Faisal",
          photoURL: "https://avatars.githubusercontent.com/u/35756672?v=4",
        });

        dispatch(
          addUser({
            uid: auth.currentUser.uid,
            email: auth.currentUser.email,
            name: auth.currentUser.displayName,
            photoUrl: auth.currentUser.photoURL,
          }),
        );
        navigate("/browse");
      }
    } catch (error) {
      console.error("FIREBASE ERROR:", error.code, error.message);
      alert(error.message); // remove later, keep for debugging now
    }
  };

  const signInText = isSignIn ? "Sign In" : "Sign Up";
  const toggleText = isSignIn ? "Sign up now" : "Sign In";
  const bottomText = isSignIn ? "New to Netflix?" : "Already a member?";

  return (
    <div className="relative">
      <Header />

      <img
        className="w-full h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/797df41b-1129-4496-beb3-6fc2f29c59d3/web/IN-en-20260112-TRIFECTA-perspective_004732f9-7464-4a7c-940b-4a51c4f0f73f_large.jpg"
        alt="background"
      />

      <form
        noValidate
        onSubmit={handleSubmit}
        className="absolute top-0 left-0 w-full h-screen flex items-center justify-center"
      >
        <div className="bg-black bg-opacity-75 p-10 rounded-lg flex flex-col gap-4 w-80 md:w-96">
          <p className="text-white text-2xl font-bold mb-2">{signInText}</p>

          {!isSignIn && (
            <>
              <input
                ref={name}
                className="p-3 bg-gray-700 text-white rounded outline-none placeholder-gray-400"
                type="text"
                placeholder="Full Name"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
            </>
          )}

          <input
            ref={email}
            className="p-3 bg-gray-700 text-white rounded outline-none placeholder-gray-400"
            type="email"
            placeholder="Email Address"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <input
            ref={password}
            className="p-3 bg-gray-700 text-white rounded outline-none placeholder-gray-400"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}

          <button
            type="submit"
            className="bg-red-600 text-white p-3 rounded font-bold hover:bg-red-700 transition"
          >
            {signInText}
          </button>

          <p className="text-gray-400 text-sm mt-2">
            {bottomText}
            <span
              className="text-white font-semibold cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {" "}
              {toggleText}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
