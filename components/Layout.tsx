import React, { FC, ReactNode } from "react";

import Nav from "./Nav";

import styles from "../styles/Layout.module.css";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
