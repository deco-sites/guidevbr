// deno-lint-ignore-file
import { installGlobals } from "https://deno.land/x/virtualstorage@0.1.0/mod.ts";
import "https://deno.land/x/xhr@0.1.1/mod.ts";
installGlobals();

import { useSignal, useSignalEffect } from "@preact/signals";
// @deno-types="https://esm.sh/firebase@10.7.1/auth"
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "npm:firebase@10.7.1/auth";
// @deno-types="https://esm.sh/firebase@10.7.1/app"
import { initializeApp } from "npm:firebase@10.7.1/app";
import type { FirebaseConfigLoader } from "../loaders/firebaseConfigLoader.ts";

export interface Props {
  firebaseConfig: FirebaseConfigLoader;
}

type AuthState = "loading" | "logged" | "not-logged";

export default function LoginButton(props: Props) {
  const isLogged = useSignal<AuthState>("loading");
  const loginToFirebase = () => {
    const app = initializeApp(props.firebaseConfig);

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      login_hint: props.firebaseConfig.adminEmailName,
    });
    signInWithPopup(auth, provider);
  };
  const logOut = () => {
    const app = initializeApp(props.firebaseConfig);

    const auth = getAuth(app);
    signOut(auth);
  };

  useSignalEffect(() => {
    const app = initializeApp(props.firebaseConfig);

    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.email === props.firebaseConfig.adminEmailName) {
          isLogged.value = "logged";
        } else {
          logOut();
          isLogged.value = "not-logged";
        }
      } else {
        isLogged.value = "not-logged";
      }
    });
    return unsubscribe;
  });

  if (isLogged.value === "loading") {
    return null;
  }

  if (isLogged.value === "logged") {
    return (
      <div className="max-w-64 text-white text-center">
        <p>
          Você está autenticado com sucesso!
          <button onClick={logOut} className="underline hover:text-gray-400">
            Clique aqui
          </button>
          , para sair.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-64 text-white text-center">
      <p>
        Alguma sessões estão desabilitadas, pois a autenticação com Firebase é necessária!
        <br />
        Clique no botão abaixo para se autenticar:
      </p>
      <button onClick={loginToFirebase} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-all mt-5">
        Login
      </button>
    </div>
  );
}
