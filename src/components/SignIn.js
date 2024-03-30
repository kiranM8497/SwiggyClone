import React, { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);

  const handleSignIn = () => {
    // Implement sign-in logic here
    console.log("Signing in with:", username, password);
  };

  const handleSignUp = () => {
    // Implement sign-up logic here
    console.log("Signing up with:", username, password);
  };

  const bagroundImgUrl =
    "https://t4.ftcdn.net/jpg/02/94/21/87/360_F_294218701_se4mQtVmQoPnG4UX7J8PjvTzn8yeWyqF.jpg";

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden ">
      <div className="bg-gray-100 p-24 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">
          {isNewUser ? "Sign Up" : "Sign In"}
        </h2>
        <div className="mb-4 px-10">
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4 px-10">
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4 flex justify-evenly">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={handleSignUp}
            name="Signup"
          >
            Sign Up
          </button>
        </div>
        <div className="text-center">
          <button
            className="text-blue-500"
            onClick={() => setIsNewUser(!isNewUser)}
          >
            {isNewUser
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
