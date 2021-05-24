import { FC } from "react";
import ArticleList from "../components/ArticleList";
import { server } from "../config";

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
      <ArticleList articles={articles} />
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
