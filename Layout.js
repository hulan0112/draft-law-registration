import React from "react";
import Sidebar from "./sidebar";
import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
      <div className={styles.container}>
        <Sidebar className={styles.sidebar}/>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    );
  };
export default Layout;