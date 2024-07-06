import React from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import "./Nav.scss";

import NavPortfolio from "../assets/images/NavPortfolio.png";
import NavAbout from "../assets/images/NavAbout.png";

export const Nav = () => {
  const location = useLocation();

  return (
    <div className="Nav">
      <Link
        className={location?.pathname === "/" && "active"}
        to={"/#portfolio"}
      >
        <img src={NavPortfolio} alt="" />
      </Link>
      <Link
        className={location?.pathname === "/about" && "active"}
        to={"/about#banner"}
      >
        <img src={NavAbout} alt="" />
      </Link>
    </div>
  );
};
