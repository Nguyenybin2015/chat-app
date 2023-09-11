import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import OnutLogo from "../img/onut.png"; 
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to O'nut.</h2>
      <img src={OnutLogo} alt="O'nut logo"/>
      <p>Sign in with Google to chat.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};

export default Welcome;