// import './App.css';

// import React, { useState } from 'react';

// import axios from 'axios';

// function App() {
//   const [user, setUser] = useState(null);

//   const handleLogin = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/auth/google');
//       setUser(response.data);
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/logout');
//       if (response.status === 200) {
//         setUser(null);
//       } else {
//         console.error('Logout failed');
//       }
//     } catch (error) {
//       console.error('Error during logout:', error);
//     }
//   };

//   return (
//     <div className="App">
//       {user ? (
//         <div>
//           <h1>Gmail Authentication Success</h1>
//           <p>Welcome, {user.displayName}</p>
//           {user.photos && user.photos.length > 0 && (
//             <img src={user.photos[0].value} alt={user.displayName} />
//           )}
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <h1>OAuth 2.0 Authentication Example</h1>
//           <button onClick={handleLogin}>Sign in via Gmail</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/home";
import Login from "./pages/login";
import React from 'react'
import axios from "axios";

const App = () => {
  const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `http://localhost:8000/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="container">
			<Routes>
				<Route
					exact
					path="/"
					element={user ? <Home user={user} /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
			</Routes>
		</div>
	);
}

export default App
