// deno-lint-ignore-file
import { installGlobals } from "https://deno.land/x/virtualstorage@0.1.0/mod.ts";
import "https://deno.land/x/xhr@0.1.1/mod.ts";
installGlobals();

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import type { FirebaseConfigLoader } from "../loaders/firebaseConfigLoader.ts";

export interface Props {
  firebaseConfig: FirebaseConfigLoader;
}

export default function LoginButton(props: Props) {
  const loginToFirebase = () => {
    console.log("Logging in to Firebase");
    const app = initializeApp(props.firebaseConfig);

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <button onClick={loginToFirebase} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Login
    </button>
  );
}
