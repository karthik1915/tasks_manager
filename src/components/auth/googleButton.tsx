import { GoogleIcon } from "@/assets/icons";
import useAuth from "@/hooks/useAuth";

const SignInWithGoogleButton = () => {
  const { signInWithGoogle } = useAuth();

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      // Google sign-in successful, you can now redirect or show a success message
    } catch (error) {
      // Handle sign-in error
    }
  };

  return (
    <button
      className="flex items-center justify-center gap-3 rounded-lg border border-gray-400 p-2"
      onClick={handleSignInWithGoogle}
    >
      <GoogleIcon width={24} height={24} />
      <p className="text-md">Sign Up</p>
    </button>
  );
};

export default SignInWithGoogleButton;
