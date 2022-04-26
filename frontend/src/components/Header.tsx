import * as React from "react";
import { NavLink } from "../models/NavLink";
import Navbar from "./Navbar";

const links: NavLink[] = [
  {
    name: "Band",
    url: "/band",
  },
  {
    name: "Albums",
    url: "/albums",
  },
  {
    name: "Songs",
    url: "/songs",
  },
  {
    name: "About",
    url: "/about",
  },
];

function Header() {
  return (
    <header>
      <Navbar links={links} />
    </header>
  );
}

export default Header;
