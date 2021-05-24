import Head from "next/head";
import { FC } from "react";
import ArticleList from "../components/ArticleList";

type Props = {
  articles: ArticleProps[];
};

type ArticleProps = {
  body: string;
  userId: number;
  id: number;
  title: string;
};

const index: FC<Props> = ({ articles }: Props) => {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web development" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
