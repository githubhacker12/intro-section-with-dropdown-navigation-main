import React from "react";
import "./homepage.css";
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";
import herodesk from "../images/image-hero-desktop.png";
import heromob from "../images/image-hero-mobile.png";
import Button from "./Button";
export default function HomePage() {
  return (
    <homepage>
      <div className="content">
        <h1>Make remote work</h1>
        <p>
          Get Your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <Button class="learn" name="Learn More" />
        <div className="client">
          <img src={databiz} />
          <img src={audiophile} />
          <img src={meet} />
          <img src={maker} />
        </div>
      </div>
      <div>
        <picture>
          <source srcSet={heromob} width="375px" media="(max-width:779px)" />
          <img className="hero" src={herodesk} width="450px" />
        </picture>
      </div>
    </homepage>
  );
}
