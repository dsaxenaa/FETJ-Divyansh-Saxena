import React from 'react'

const Login = () => {

    const loginWithGoogle = () => {
		window.open(
			`http://localhost:8000/auth/google/callback`,
			"_self"
		);
	};

  return (
    <div className="container mx-auto p-4 mt-[10rem] max-w-[40rem] bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Node.js Authentication app using Google</h1>
      <button
        onClick={loginWithGoogle}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign in with Google
      </button>
    </div>
  )
}

export default Login