import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
