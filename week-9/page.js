"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Home() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to Week 9</h1>
      {!user ? (
        <button
          onClick={handleLogin}
          className="mt-4 p-2 bg-blue-500 text-white"
        >
          Sign in with GitHub
        </button>
      ) : (
        <div>
          <h2>Welcome, {user.displayName || user.email}</h2>
          <button
            onClick={handleLogout}
            className="mt-4 p-2 bg-red-500 text-white"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
