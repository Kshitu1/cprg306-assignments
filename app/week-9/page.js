"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        {!user ? (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome to the Shopping List App
            </h2>
            <p className="text-gray-600 mb-6">
              Please log in to access your shopping list.
            </p>
            <button
              onClick={gitHubSignIn}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 ease-in-out"
            >
              Login with GitHub
            </button>
          </>
        ) : (
          <>
            <p className="text-xl font-semibold text-gray-800 mb-2">
              Welcome, {user.displayName} ({user.email})
            </p>
            <button
              onClick={firebaseSignOut}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200 ease-in-out"
            >
              Logout
            </button>
            <Link
              href="/week-9/shopping-list"
              className="block mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200 ease-in-out"
            >
              Go to Shopping List
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
