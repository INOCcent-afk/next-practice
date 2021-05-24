import React, { FC } from "react";

import styles from "../styles/Layout.module.css";

const Layout: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}></main>
      </div>
    </>
  );
};

export default Layout;
