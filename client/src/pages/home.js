import React, { useEffect, useState } from "react";

import DiamondPattern from "./diamond";

const Home = (userDetails) => {
  console.log(userDetails.user);

  const logout = () => {
    window.open(`http://localhost:8000/auth/logout`, "_self");
  };
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
        <div className="container mx-auto p-6 mt-[5rem] max-w-md bg-gray-200 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">User Details</h1>
      <img
        src={userDetails.user.picture}
        alt="user image"
        className="rounded-full w-20 h-20 object-cover mb-4"
      />
      <p className="text-lg font-bold mb-2">Hello, {userDetails.user.name}!</p>
      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700 hover:scale-105 text-white font-bold py-2 px-4 rounded"
      >
        Sign Out
      </button>
      <p className="mt-4">You're signed in with the email <strong>{userDetails.user.email}</strong></p>
      <p className="mt-2">Current Time: {currentTime.toLocaleTimeString()}</p>
    </div>
    <DiamondPattern/>
    </div>
    
  );
};

export default Home;
