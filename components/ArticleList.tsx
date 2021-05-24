import React, { FC } from "react";

import styles from "../styles/Article.module.css";
import Article from "./Article";

type Props = {
  articles: ArticleProps[];
};

type ArticleProps = {
  body: string;
  userId: number;
  id: number;
  title: string;
};

const ArticleList: FC<Props> = ({ articles }: Props) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
