import type { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";

type HomeProps = {
  token: string;
};

const Home: NextPage<HomeProps> = ({ token }) => {
  return <div>{token}</div>;
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
  return {
    props: {
      token: cookies.token,
    },
  };
};

export default Home;
