import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "./Footer";

function Layout() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

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