import React from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";
import Header from "./Header";

import styles from "./Layout.module.css";

function Layout() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.container}>
      <Header /> 
      <button type="button" onClick={() => changeLanguage("ru")}>
        ru
      </button>
      <button type="button" onClick={() => changeLanguage("en")}>
        en
      </button>

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;