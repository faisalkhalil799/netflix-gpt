import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn((prev) => !prev);
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
        alt="background image"
      />

      <form className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
        <div className="bg-black bg-opacity-75 p-10 rounded-lg flex flex-col gap-5 w-80 md:w-96">
          <p className="text-white text-2xl font-bold mb-2">{signInText}</p>

          {!isSignIn && (
            <input
              className="p-3 bg-gray-700 text-white rounded outline-none placeholder-gray-400"
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            className="p-3 bg-gray-700 text-white rounded outline-none placeholder-gray-400"
            type="email"
            placeholder="Email Address"
          />

          <input
            className="p-3 bg-gray-700 text-white rounded outline-none placeholder-gray-400"
            type="password"
            placeholder="Password"
          />

          <button className="bg-red-600 text-white p-3 rounded font-bold hover:bg-red-700 transition">
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
