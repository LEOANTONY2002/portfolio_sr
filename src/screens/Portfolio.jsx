import React, { useState } from "react";
import "./Portfolio.scss";

import Photo from "../assets/images/Photo.png";
import About from "../assets/images/About.png";
import Forward from "../assets/images/Forward.png";

import { achievements, links } from "../content";
import { HashLink as Link } from "react-router-hash-link";

function Portfolio() {
  const [index, setIndex] = useState(0);

  return (
    <div id="portfolio" className="Portfolio">
      <div className="p-banner">
        <div className="p-bg"></div>
      </div>
      <main>
        <div className="p-content">
          <div className="name">
            <h1>SANKAR RENGANATHAN</h1>
          </div>
          <p>Candidate for Associate Member Director</p>
          <p>2024-26 Board of Directors, International Cricket Council</p>
          <div className="links">
            {links?.map((link) => (
              <a target="_blank" href={link?.link} key={link?.name}>
                <img width={25} height={25} src={link?.icon} alt={link?.name} />
              </a>
            ))}
          </div>
          <h5>
            <span>My Vision</span>is to transform the future of cricket,
            empowering Associate Members and enriching the global cricket
            ecosystem.
          </h5>
        </div>
        <img width={500} src={Photo} alt="" />
        <div className="p-txt">
          <span>GREAT SPORT</span>
          <span>GREAT SPIRIT</span>
        </div>
      </main>
      <div id="about" className="about">
        <div>
          <h1>I am</h1>
          <p>
            A Cricket Hall of Famer / Leader / Entrepreneur / Scientist /
            Illustrious Alumni / University Executive Education Advisor /
            International yoga trainer
          </p>
          <Link to={"/about#banner"}>
            <button>Know more</button>
          </Link>
        </div>
        <img width={300} src={About} alt="" />
      </div>
      <div id="achievements" className="achievements">
        <h1>
          Achievements <span></span>
          <span></span>
          <span></span>
          <span></span>
        </h1>
        <section>
          {index > 0 && (
            <div className="forward">
              <img
                onClick={() => setIndex(index - 1)}
                width={30}
                src={Forward}
                alt=""
              />
            </div>
          )}
          <div className="achs">
            <div className="grad"></div>
            {achievements[index]?.map((ach) => (
              <div className="ach" key={ach?.txt}>
                <div>
                  <img width={40} src={ach?.img} alt="" />
                </div>
                <p>{ach?.txt}</p>
              </div>
            ))}
          </div>
          {index < 2 && (
            <div className="forward">
              <img
                onClick={() => setIndex(index + 1)}
                width={30}
                src={Forward}
                alt=""
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
