import React from "react";
import "./About.scss";
import { biography, mission, mission2 } from "../content";

function About() {
  return (
    <div className="About">
      <div id="banner" className="banner">
        <h1>ABOUT ME</h1>
      </div>
      <div id="biography" className="biography">
        <section>
          <p>Biography</p>
        </section>
        {biography?.map((bio) => (
          <div key={bio?.color}>
            <p style={{ backgroundColor: bio?.color }}></p>
            <span>{bio?.txt}</span>
          </div>
        ))}
      </div>
      <div id="mission" className="mission">
        <section>
          <span>My</span>
          <h1>MISSION</h1>
          <span>is to</span>
        </section>
        <div>
          {mission?.map((mis) => (
            <p key={mis?.letter}>
              <span style={{ color: mis?.color }}>{mis?.letter}</span>
              {mis?.txt}
            </p>
          ))}
        </div>
      </div>
      <div className="mission2">
        {mission2?.map((mis) => (
          <div key={mis}>
            <div className="bg1"></div>
            <div className="bg2"></div>
            <div className="bg3"></div>
            <p>{mis}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
