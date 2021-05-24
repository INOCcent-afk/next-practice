import Head from "next/head";
import { FC } from "react";

const index: FC = () => {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web development" />
      </Head>
      <h1>Welcome to next</h1>
    </div>
  );
};

export default index;
