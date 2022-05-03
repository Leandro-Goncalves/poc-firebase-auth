import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import {
  createUserWithEmailAndPassword,
  signInWithCustomToken,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

const Home: NextPage = () => {
  const cookies = parseCookies();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    console.log(user);
  }, [user]);
  return <div>Logged</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);
  if (!cookies.token) {
    return {
      props: {},
      redirect: {
        destination: "/",
      },
    };
  }
  return { props: {} };
};

export default Home;
