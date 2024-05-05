import useAuth from "@/hooks/useAuth";
import { FirebaseError } from "firebase/app";
import React, { useState } from "react";
import SignInWithGoogleButton from "./googleButton";

const RegisterForm: React.FC = () => {
  const { register } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {
      await register(email, password);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) setError("Error :" + error.message);
      else setError("Unknown error: " + error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-center text-xl font-semibold">Sign Up</p>
      <input
        type="email"
        value={email}
        className={`rounded-lg bg-gray-300 p-2 text-black outline-none`}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        className={`rounded-lg bg-gray-300 p-2 text-black  outline-none`}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <SignInWithGoogleButton />
      <button
        className="w-full rounded-lg bg-blue-500 py-2"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default RegisterForm;
