import type { NextPage } from "next";
import { setCookie } from "nookies";

import styles from "../styles/Home.module.css";
import {
  auth,
  facebookProvider,
  githubProvider,
  privider,
} from "../firebase/config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signInWithGoogle = () => {
    signInWithPopup(auth, privider)
      .then((result) => {
        const { user } = result;
        console.log(result);
        user.getIdToken().then((token) => {
          setCookie(null, "token", token);
          router.push("/pages/private");
        });
      })
      .catch((error) => {});
  };

  const signInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const { user } = result;
        console.log(user);
        user.getIdToken().then((token) => {
          setCookie(null, "token", token);
          router.push("/pages/private");
        });
      })
      .catch((error) => {});
  };

  const signInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const { user } = result;
        console.log(user);
        user.getIdToken().then((token) => {
          setCookie(null, "token", token);
          router.push("/pages/private");
        });
      })
      .catch((error) => {});
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        const { user } = credential;

        user.getIdToken().then((token) => {
          setCookie(null, "token", token);
        });

        router.push("/pages/private");
      })
      .catch(() => {
        console.log("login failed");
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Login</h1>
        <input
          placeholder="E-mail"
          type="email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} onClick={handleLogin}>
          Login
        </button>
        <h3>Social login</h3>
        <button className={styles.button} onClick={signInWithGoogle}>
          Google
        </button>
        <button className={styles.button} onClick={signInWithFacebook}>
          Facebook
        </button>
        <button className={styles.button} onClick={signInWithGithub}>
          Github
        </button>
      </div>
    </div>
  );
};

export default Home;
