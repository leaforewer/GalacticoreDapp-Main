import React from "react";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import galacticoreImg from "./images/Nav/Galacticore-logotext.png";
import homeMainImg from "./images/Home/home-page-main.png";
import homemblMainImg from "./images/Home/mobile-home.png";
import homeMainAst1 from "./images/Home/ast1.png";
import homeMainAst2 from "./images/Home/ast2.png";
import homeMainAst3 from "./images/Home/ast3.png";
import roadmapPlanet1 from "./images/Roadmap/blue-moon.png";
import roadmapPlanet2 from "./images/Roadmap/purple-moon.png";
import roadmapPlanet3 from "./images/Roadmap/saturn.png";
import roadmapPlanet4 from "./images/Roadmap/earth-ish.png";
import aboutImg from "./images/Team/nft-about.jpg";
import founder1 from "./images/Team/f2.png";
import founder2 from "./images/Team/f1.png";
import artist from "./images/Team/artist.png";
import collabman1 from "./images/Team/collabman1.png";
import collabman2 from "./images/Team/collabman2.png";
import comman from "./images/Team/comman.png";
import marketingman from "./images/Team/marketingman.png";

import { useState } from "react";
function Home() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="Home">
      <main className="main" id="content">
        {/* Navbar */}
        <section>
          <header>
            <div className="cointainer-fluid">
              <div className="row">
                <div className="col-12">
                  <nav id="navbar" className="main-nav navbar fixed-top">
                    <a
                      id="logo"
                      href="#home"
                      className="logo d-flex align-items-center"
                    >
                      <div className="navHead">
                        <img
                          loading="lazy"
                          src={galacticoreImg}
                          alt="Galacticore-Logotext"
                        />
                      </div>
                    </a>
                    <div className="social-link dsktp-d-none">
                      <div className="social-link-nav" id="discord">
                        <a
                          href="https://discord.gg/qfvsNag6rj"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="bi bi-discord"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                          </svg>
                        </a>
                      </div>
                      <div className="social-link-nav" id="twitter">
                        <a
                          href="https://twitter.com/GalacticoreNFT"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="bi bi-twitter"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </a>
                      </div>
                      <div className="social-link-nav" id="kalao">
                        <a
                          href="https://marketplace.kalao.io/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="kalao-scale">
                            <div className="kalao"></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="icon dsktp-d-none" onClick={handleToggle}>
                      <i className="fa fa-bars"></i>
                    </div>
                    <div
                      className={isActive ? null : "navbar-toggler-mobile"}
                      id="NavItems"
                    >
                      <Fade triggerOnce="true">
                        <ul className="navbar-nav my-auto topnav">
                          <li className="nav-item" onClick={handleToggle}>
                            <a href="#about" id="nav-link" className="nav-link">
                              About
                            </a>
                          </li>
                          <li className="nav-item" onClick={handleToggle}>
                            <a
                              href="#roadmap"
                              id="nav-link"
                              className="nav-link"
                            >
                              Roadmap
                            </a>
                          </li>
                          <li className="nav-item" onClick={handleToggle}>
                            <a
                              href="https://docs.galacticore-nft.com/"
                              target="_blank"
                              rel="noreferrer"
                              id="nav-link"
                              className="nav-link"
                            >
                              White Paper
                            </a>
                          </li>
                          <li className="nav-item" onClick={handleToggle}>
                            <a href="#team" id="nav-link" className="nav-link">
                              Team
                            </a>
                          </li>
                          <li className="nav-item" onClick={handleToggle}>
                            <a href="#faq" id="nav-link" className="nav-link">
                              f.a.q
                            </a>
                          </li>
                        </ul>
                      </Fade>
                    </div>
                    <div className="social-link mbl-d-none">
                      <div className="social-link-nav" id="discord">
                        <a
                          href="https://discord.gg/qfvsNag6rj"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="bi bi-discord"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                          </svg>
                        </a>
                      </div>
                      <div className="social-link-nav" id="twitter">
                        <a
                          href="https://twitter.com/GalacticoreNFT"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="bi bi-twitter"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </a>
                      </div>
                      <div className="social-link-nav" id="kalao">
                        <a
                          href="https://marketplace.kalao.io/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="kalao-scale">
                            <div className="kalao"></div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </header>
        </section>
        {/* Content Homepage */}
        <section>
          <div className="row">
            <div className="col-12">
              {/* Home */}
              <div id="home" className="home-main">
                <div className="home-page-img">
                  <img
                    loading="lazy"
                    className="home-img"
                    alt="homeMainImg"
                    src={homeMainImg}
                  />
                  <img
                    loading="lazy"
                    className="home-img-mbl"
                    src={homemblMainImg}
                    alt="Home-Mobile-Img"
                  />
                  <Fade triggerOnce="true">
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
                  <Link to="/mint">
                    <div className="home-page-button"></div>
                  </Link>
                </div>
              </div>
              {/* About */}
              <div id="about">
                <div className="about-main container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <Fade triggerOnce="true" direction="up">
                        <div className="bio-head">
                          <h2>
                            <Typical
                              steps={[
                                "Who is",
                                2500,
                                "Wer ist",
                                2500,
                                "Wie is",
                                2500,
                                "谁是",
                                2500,
                                "Qui est",
                                2500,
                                "الذي هو",
                                2500,
                                "Кто",
                                2500,
                              ]}
                              loop={Infinity}
                              wrapper="div"
                            />
                            GalacticOre?
                          </h2>
                        </div>
                      </Fade>
                      <div className="row bio-main">
                        <div className="col-lg-6 col-sm-12 bio-content-main">
                          <Fade triggerOnce="true" direction="left">
                            <div className=" bio-content">
                              <div>
                                Galacticore is a mining-based{" "}
                                <span className="mark">#PlayAndEarn</span> game
                                which is planned to be released in{" "}
                                <span className="date-font">Q1 2023</span>.
                                Before the game's release, it was released as a
                                NFT series of the game. These NFTs will be used
                                in our future games.
                              </div>
                              <div>
                                These NFTs are generally for{" "}
                                <span className="mark">rewarding</span> and
                                building a{" "}
                                <span className="mark">community</span> before
                                the actual game launch.
                              </div>
                              <div>
                                We built these NFTs as
                                <span className="mark">perfect</span> as
                                possible to also let them to be used as{" "}
                                <span className="mark">avatars</span> for the
                                buyers.
                              </div>
                            </div>
                          </Fade>
                        </div>
                        <div className="col-lg-6 col-sm-12 center-center mbl-d-none tblt-d-none">
                          <Fade triggerOnce="true" direction="right">
                            <div className="bio-img">
                              <img
                                loading="lazy"
                                src={aboutImg}
                                alt="AboutImage"
                              />
                            </div>
                          </Fade>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Roadmap */}
              <div id="roadmap" className="roadmap-main container">
                <div className="row w-100">
                  <div className="col-12">
                    <Fade triggerOnce="true">
                      <div className="roadmap-main-head">
                        <svg className="svg-mbl" viewBox="0 0 10 2">
                          <text
                            x="5"
                            y="1"
                            textAnchor="middle"
                            fontSize="1"
                            fill="none"
                            strokeWidth=".01"
                            stroke="#33c8ff"
                            fontFamily="Righteous"
                          >
                            ROADMAP
                          </text>
                        </svg>
                      </div>
                    </Fade>
                    <Fade triggerOnce="true">
                      <div className="roadmap-header svg-dsk">
                        <div className="head"></div>
                      </div>
                    </Fade>
                    <div className="row">
                      <div className="col-lg-6 col-sm-12">
                        <Fade triggerOnce="true" direction="left">
                          <div className="roadmap-content-left">
                            <span className="roadmap-periodes">Q2 2022</span>
                            <div className="roadmap-head">
                              RELEASE OF FIRST NFT SERIES
                              <br /> REWARD CLAIMS FOR NFT HOLDERS COMMUNITY
                              COMPETITIONS
                              <br /> HOLDER TIERS
                            </div>
                            <div className="roadmap-context">
                              Beginning of the journey for all Galactic
                              warriors. Mint Galacticore NFTs to help us take
                              out danger out of this solar system!
                            </div>
                          </div>
                        </Fade>
                      </div>
                      <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
                        <div className="planet-1">
                          <img
                            loading="lazy"
                            width={310}
                            alt="RoadmapPlanet-1"
                            src={roadmapPlanet1}
                          />
                          <div className="avax-logo-layer">
                            <div className="avax-logo"></div>
                          </div>
                          <div className="line-1">
                            <div className="line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <div className="planet-2">
                          <img
                            loading="lazy"
                            width={310}
                            alt="RoadmapPlanet-2"
                            src={roadmapPlanet2}
                          />
                          <div className="line-2">
                            <div className="line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <Fade triggerOnce="true" direction="right">
                          <div className="roadmap-content-right">
                            <span className="roadmap-periodes">Q3 2022</span>
                            <div className="roadmap-head">
                              STARTUP PLAY <span className="amp">&</span> EARN
                              GAME
                              <br /> TOKEN LAUNCH
                              <br /> DAILY TOKEN REWARDS
                              <br />
                              TOURNAMENTS <span className="amp">&</span> BETS
                            </div>
                            <div className="roadmap-context">
                              Our base 'Galactic Warriors' will be protected
                              from raiders. In our hub there will be
                              tournaments, bets and lots of enjoy.
                            </div>
                          </div>
                        </Fade>
                      </div>
                      <div className="col-lg-6 col-sm-12 d-flex align-items-center">
                        <Fade triggerOnce="true" direction="left">
                          <div className="roadmap-content-left q4">
                            <span className="roadmap-periodes">Q4 2022</span>
                            <div className="roadmap-head">
                              LAUNCH OF P2E MINI GAME
                              <br />
                              PRE SEASON BEFORE FULL GAME
                            </div>
                            <div className="roadmap-context">
                              WAGMI as Galactic Warriors! As you play thorughout
                              our game, you will be finding extra ordinary Ores
                              for each milestone you get in our solar system.
                            </div>
                          </div>
                        </Fade>
                      </div>
                      <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <div className="planet-3">
                          <img
                            loading="lazy"
                            width={550}
                            alt="RoadmapPlanet-3"
                            src={roadmapPlanet3}
                          />
                          <div className="line-3">
                            <div className="line"></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <div className="planet-4">
                          <img
                            loading="lazy"
                            width={310}
                            alt="RoadmapPlanet-4"
                            src={roadmapPlanet4}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <Fade triggerOnce="true" direction="right">
                          <div className="roadmap-content-right">
                            <span className="roadmap-periodes">Q1 2023</span>
                            <div className="roadmap-head">
                              LAUNCH OF NEW P2E GAME
                              <br />
                              TOKEN REWARDS IN-GAME
                            </div>
                            <div className="roadmap-context">
                              Biggest milestone of a new journey for Galactic
                              Warriors. We will be launching our full P2E game
                              to the public. With more gamemodes you gain more
                              than you can imagine!
                            </div>
                          </div>
                        </Fade>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Team */}
              <div id="team">
                <div className="team-main">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12">
                            <Fade triggerOnce="true">
                              <div className="team-head">
                                <svg viewBox="0 0 10 2">
                                  <text
                                    x="5"
                                    y="1"
                                    textAnchor="middle"
                                    fontSize="1"
                                    fill="none"
                                    strokeWidth=".01"
                                    stroke="#33c8ff"
                                    fontFamily="Righteous"
                                  >
                                    TEAM
                                  </text>
                                </svg>
                              </div>
                            </Fade>
                          </div>
                          <div className="team-card my-5 col-lg-6 col-sm-12 s-mbl-right">
                            <Fade triggerOnce="true">
                              <div className="team-bio-img">
                                <img
                                  loading="lazy"
                                  src={founder1}
                                  alt="Founder"
                                />
                              </div>
                              <div className="team-name">
                                <h4>Leaforever</h4>
                              </div>
                              <div className="team-position">
                                <h5>CO-Founder</h5>
                              </div>
                            </Fade>
                          </div>
                          <div className=" team-card my-5 col-lg-6 col-sm-12 s-mbl-left">
                            <Fade triggerOnce="true">
                              <div className="team-bio-img">
                                <img
                                  loading="lazy"
                                  src={founder2}
                                  alt="Founder"
                                />
                              </div>
                              <div className="team-name">
                                <h4>Ferrosia</h4>
                              </div>
                              <div className="team-position">
                                <h5>CO-Founder</h5>
                              </div>
                            </Fade>
                          </div>
                          <div className="team-card my-5 col-lg-6 col-sm-12 s-mbl-right">
                            <Fade triggerOnce="true">
                              <div className="team-bio-img">
                                <img loading="lazy" src={artist} alt="Artist" />
                              </div>
                              <div className="team-name">
                                <h4>Fliyingcat</h4>
                              </div>
                              <div className="team-position">
                                <h5>Artist</h5>
                              </div>
                            </Fade>
                          </div>
                          <div className="team-card my-5 col-lg-6 col-sm-12 s-mbl-left">
                            <Fade triggerOnce="true">
                              <div className="team-bio-img">
                                <img
                                  loading="lazy"
                                  src={marketingman}
                                  alt="Marketing manager"
                                />
                              </div>
                              <div className="team-name">
                                <h4>Achilles</h4>
                              </div>
                              <div className="team-position">
                                <h5>Marketting Manager</h5>
                              </div>
                            </Fade>
                          </div>
                          <div className="team-card my-5 col-lg-6 col-sm-12 s-mbl-right">
                            <Fade triggerOnce="true">
                              <div className="team-bio-img">
                                <img
                                  loading="lazy"
                                  src={comman}
                                  alt="Community manager"
                                />
                              </div>
                              <div className="team-name">
                                <h4>Azumithal</h4>
                              </div>
                              <div className="team-position">
                                <h5>Community Manager</h5>
                              </div>
                            </Fade>
                          </div>
                          <div className="team-card my-5 col-lg-6 col-sm-12 s-mbl-left">
                            <Fade triggerOnce="true">
                              <div className="team-bio-img">
                                <img
                                  loading="lazy"
                                  src={collabman1}
                                  alt="Collab manager"
                                />
                              </div>
                              <div className="team-name">
                                <h4>Kyra</h4>
                              </div>
                              <div className="team-position">
                                <h5>Collab Manager</h5>
                              </div>
                            </Fade>
                          </div>
                          <div className="team-card my-5 col-lg-12 col-sm-12 s-mbl-right">
                            <Fade triggerOnce="true">
                              <div className="team-bio-img">
                                <img
                                  loading="lazy"
                                  src={collabman2}
                                  alt="Collab manager"
                                />
                              </div>
                              <div className="team-name">
                                <h4>poohdini22</h4>
                              </div>
                              <div className="team-position">
                                <h5>Collab Manager</h5>
                              </div>
                            </Fade>
                          </div>
                          <div className="col-lg-12">
                            <div className="row justify-content-center">
                              <div className="col-lg-5 col-md-12 justify-content-center d-flex">
                                <div className="join-us-template justify-content-center">
                                  <div className="join-us-head">Join us!</div>
                                  <div className="join-us-info">
                                    Email us!
                                    <a
                                      className="email-link"
                                      href="mailto:galacticore.info@gmail.com"
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      galacticore.info@gmail.com
                                    </a>
                                  </div>
                                  <div className="join-us-more">
                                    Or Contact us with{" "}
                                    <div className="join-links">
                                      <div className="join-discord">
                                        <a
                                          href="https://discord.gg/qfvsNag6rj"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            className="bi bi-discord"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                                          </svg>
                                        </a>
                                      </div>{" "}
                                      <span className="amp-join">&</span>
                                      <div className="join-twitter">
                                        <a
                                          href="https://twitter.com/GalacticoreNFT"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            className="bi bi-twitter"
                                            viewBox="0 0 16 16"
                                          >
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                          </svg>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="faq">
                <div className="container faq-main">
                  <div className="row">
                    <div className="col-12">
                      <div className="faq-head">
                        <svg className="svg-dsk" viewBox="0 0 10 2">
                          <text
                            x="5"
                            y="1"
                            textAnchor="middle"
                            fontSize="1"
                            fill="none"
                            strokeWidth=".01"
                            stroke="#33c8ff"
                            fontFamily="Righteous"
                          >
                            FREQUENTLY ASKED QUESTIONS
                          </text>
                        </svg>
                        <svg className="svg-mbl" viewBox="0 0 10 2">
                          <text
                            x="5"
                            y="1"
                            textAnchor="middle"
                            fontSize="1"
                            fill="none"
                            strokeWidth=".01"
                            stroke="#33c8ff"
                            fontFamily="Righteous"
                          >
                            FAQ
                          </text>
                        </svg>
                      </div>
                      <div className="accordion">
                        <div className="accordion-item" id="question1">
                          <a className="accordion-link" href="#question1">
                            <div className="flex">
                              <h3>What are NFTs?</h3>
                            </div>
                            <ul>
                              <li>#NFTs</li>
                              <li>#What is Nft</li>
                            </ul>

                            <i className="icon-faq ion-md-arrow-forward"></i>
                            <i className="icon-faq ion-md-arrow-down"></i>
                          </a>
                          <div className="answer">
                            <p>
                              {" "}
                              NFT means None Fungible Token.All of the tokens
                              are linked to an image. This makes these tokens
                              unique and different from each other.
                            </p>
                          </div>
                        </div>
                        <div className="accordion-item" id="question2">
                          <a className="accordion-link" href="#question2">
                            <div className="flex">
                              <h3>What is Galacticore?</h3>
                            </div>
                            <ul>
                              <li>#NFT</li>
                              <li>#Galacticore</li>
                              <li>#P2E</li>
                              <li>#Game</li>
                            </ul>

                            <i className="icon-faq ion-md-arrow-forward"></i>
                            <i className="icon-faq ion-md-arrow-down"></i>
                          </a>
                          <div className="answer">
                            <p>
                              Galacticore is a NFT series of 3333 unique NFTs.
                              When you mint a Galacticore NFT, you are actually
                              minting your future in-game character for upcoming
                              play and earn game.
                            </p>
                          </div>
                        </div>
                        <div className="accordion-item" id="question3">
                          <a className="accordion-link" href="#question3">
                            <div className="flex">
                              <h3>How can i be eligible for whitelist?</h3>
                            </div>
                            <ul>
                              <li>#PreSale</li>
                              <li>#Whitelist</li>
                              <li>#Discord</li>
                            </ul>

                            <i className="icon-faq ion-md-arrow-forward"></i>
                            <i className="icon-faq ion-md-arrow-down"></i>
                          </a>
                          <div className="answer">
                            <p>
                              You can be eligible for whitelist by entering
                              giveaways or being active in community. You can
                              also get whitelist by just being active in our
                              discord channel. Most active users in our discord
                              server will get whitelist.
                            </p>
                          </div>
                        </div>
                        <div className="accordion-item" id="question4">
                          <a className="accordion-link" href="#question4">
                            <div>
                              <h3>What is mint price for Galacticore NFTs?</h3>{" "}
                            </div>
                            <ul>
                              <li>#PublicSale</li>
                              <li>#PreSale</li>
                              <li>#Avax</li>
                              <li>#Mint</li>
                            </ul>

                            <i className="icon-faq ion-md-arrow-forward"></i>
                            <i className="icon-faq ion-md-arrow-down"></i>
                          </a>
                          <div className="answer">
                            <ul>
                              <li>1.2 AVAX for public sale</li>
                              <li> 1 AVAX for presale</li>
                            </ul>
                          </div>
                        </div>
                        <div className="accordion-item" id="question5">
                          <a className="accordion-link" href="#question5">
                            <div>
                              <h3>What is Galacticore Play and Earn game?</h3>
                            </div>
                            <ul>
                              <li>#P2E</li>
                              <li>#Game</li>
                              <li>#Rewards</li>
                              <li>#Galacticore</li>
                              <li>#Adventure</li>
                            </ul>

                            <i className="icon-faq ion-md-arrow-forward"></i>
                            <i className="icon-faq ion-md-arrow-down"></i>
                          </a>
                          <div className="answer">
                            <p>
                              Galacticore is a mining based play and earn. In
                              this game you'll be able to mine around the
                              universe. You will get items by mining rewards and
                              fight with other players from other planets.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <section>
          <footer id="footer">
            <div className="container bottom">
              <div className="row w-100">
                <div className="col-12">
                  <div className="row">
                    <div className="col-6">
                      <ul className="footer-info">
                        <li className="footer-logo">
                          {" "}
                          <img
                            loading="lazy"
                            src={galacticoreImg}
                            alt="Galacticore-Logotext"
                          />
                        </li>
                        <li className="footer-cpyright">
                          Copyright © 2022 Galacticore
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 footer-right">
                      <ul className="footer-social-link">
                        <li>
                          <a
                            className="footer-link"
                            href="https://discord.gg/qfvsNag6rj"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              className="bi bi-discord"
                              viewBox="0 0 16 16"
                            >
                              <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            className="footer-link"
                            href="https://twitter.com/GalacticoreNFT"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              className="bi bi-twitter"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                          </a>
                        </li>
                        <li className="footer-link">
                          <a
                            href="https://marketplace.kalao.io/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div className="kalao"></div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default Home;
