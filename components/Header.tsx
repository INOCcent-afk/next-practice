import React, { FC } from "react";

import styles from "../styles/Header.module.css";

const Header: FC = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={styles.description}>
        Keep up to date with latest web dev news
      </p>
    </div>
  );
};

export default Header;
