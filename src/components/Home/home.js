import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import homeMainImg from "../images/Home/home-page-main.png";
import homemblMainImg from "../images/Home/mobile-home.png";
import homeMainAst1 from "../images/Home/ast1.png";
import homeMainAst2 from "../images/Home/ast2.png";
import homeMainAst3 from "../images/Home/ast3.png";

function Home() {
  return (
    <div id="home" className="home-main">
      <div className="home-page-img">
        <img
          loading="lazy"
          className="home-img"
          alt="homeMainImg"
          src={homeMainImg}
        />
        <img
          className="home-img-mbl"
          src={homemblMainImg}
          alt="Home-Mobile-Img"
        />
        <Fade triggerOnce="true" className="mbl-fade-char">
          <img
            loading="lazy"
            className="home-chars char-1"
            alt="homeMainAst1"
            src={homeMainAst1}
          />
        </Fade>
        <div className="shadow-1"></div>
        <div className="bullet-1"></div>
        <div className="bullet-2"></div>
        <div className="bullet-3"></div>
        <Fade triggerOnce="true">
          <img
            loading="lazy"
            className="home-chars char-2"
            alt="homeMainAst2"
            src={homeMainAst2}
          />
        </Fade>
        <div className="shadow-2"></div>
        <Fade triggerOnce="true">
          <img
            loading="lazy"
            className="home-chars char-3"
            alt="homeMainAst3"
            src={homeMainAst3}
          />
        </Fade>
        <div className="shadow-3"></div>
        <Link to="/">
          <div className="home-page-button"></div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
