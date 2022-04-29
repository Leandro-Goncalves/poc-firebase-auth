import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
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
