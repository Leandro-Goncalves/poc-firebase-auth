import { setCookie } from "nookies";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHvqcnO6W2_yegIjL1xlRwG4TZxrNgoEs",
  authDomain: "teste-455fc.firebaseapp.com",
  projectId: "teste-455fc",
  storageBucket: "teste-455fc.appspot.com",
  messagingSenderId: "160059515597",
  appId: "1:160059515597:web:7f0f0be6e7ba31809b7f84",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const privider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, privider)
    .then((result) => {
      const { user } = result;
      console.log(user);
      user.getIdToken().then((token) => {
        setCookie(null, "token", token);
      });
    })
    .catch((error) => {});
};
