import { setCookie } from "nookies";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

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

export const privider = new GoogleAuthProvider();

export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();
