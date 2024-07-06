import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./Footer.scss";

import FooterPhoto from "../assets/images/FooterPhoto.png";
import Email from "../assets/images/Email.png";
import Mobile from "../assets/images/Mobile.png";
import Location from "../assets/images/Location.png";

export const Footer = () => {
  return (
    <section className="Footer">
      <div className="name">
        <h1>SANKAR</h1>
        <h1>RENGANATHAN</h1>
      </div>
      <img src={FooterPhoto} alt="" />
      <div style={{ flex: 1 }}></div>
      <div className="links">
        <div>
          <h3>PORTFOLIO</h3>
          <Link to={"/#portfolio"}>Portfolio</Link>
          <Link to={"/#about"}>About Me</Link>
          <Link to={"/#achievements"}>Achievements</Link>
        </div>
        <div>
          <h3>ABOUT ME</h3>
          <Link to={"/about#biography"}>Biography</Link>
          <Link to={"/about#mission"}>Mission</Link>
        </div>
        <div>
          <h3>CONTACT</h3>
          <div>
            <img src={Location} alt="" />
            <span>West Bloomfield, Michigan, USA</span>
          </div>
          <div>
            <img src={Email} alt="" />
            <span>sankarrenganathan@gmail.com</span>
          </div>
          <div>
            <img src={Mobile} alt="" />
            <span>
              +1 73 425299 27<p>+1 24 856871 64</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
