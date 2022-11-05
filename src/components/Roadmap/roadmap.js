import React from "react";
import { Fade } from "react-awesome-reveal";
import roadmapPlanet2 from "../images/Roadmap/purple-moon.png";
import roadmapPlanet3 from "../images/Roadmap/saturn.png";
import roadmapPlanet4 from "../images/Roadmap/earth-ish.png";
import "@lottiefiles/lottie-player";

function Roadmap() {
  return (
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
                  <span className="roadmap-periodes">Q3 2022</span>
                  <div className="roadmap-head">
                    RELEASE OF FIRST SMOL NFT SERIES
                    <br /> REWARD CLAIMS FOR NFT HOLDERS COMMUNITY COMPETITIONS
                    <br /> HOLDER TIERS
                  </div>
                  <div className="roadmap-context">
                    Beginning of the journey for all Galactic warriors. Mint
                    Galacticore NFTs to help us take out danger out of this
                    solar system!
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
              <div className="planet-1">
                <div className="line-1">
                  <div className="line"></div>
                </div>
                <lottie-player
                  src="https://assets7.lottiefiles.com/packages/lf20_l3qxn9jy.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
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
                  <span className="roadmap-periodes">Q4 2022</span>
                  <div className="roadmap-head">
                    STARTUP PLAY <span className="amp">&</span> EARN GAME
                    <br /> MIGRATION TO APTOS
                    <br /> COMMUNITY SPECIAL NFT'S
                  </div>
                  <div className="roadmap-context">
                    Our base 'Galactic Warriors' will be protected from raiders.
                    In our hub there will be special nft's for warrior holders
                    and supporters.
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-lg-6 col-sm-12 d-flex align-items-center">
              <Fade triggerOnce="true" direction="left">
                <div className="roadmap-content-left q4">
                  <span className="roadmap-periodes">Q1 2023</span>
                  <div className="roadmap-head">
                    GALACTICORE DAO
                    <br /> RELEASE 2'ND NFT SERIES
                  </div>
                  <div className="roadmap-context">
                    WAGMI as Galactic Warriors! Biggest milestone for
                    Galacticore. We will be launching our new P2E IDLE Game. The
                    game will get updates regularly to keep the players and the
                    game itself alive.
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
                  <span className="roadmap-periodes">Q2 2023</span>
                  <div className="roadmap-head">LAUNCH OF GOVERNANCE TOKEN</div>
                  <div className="roadmap-context">
                    We will be launching our very first governance token to
                    expand, share and discuss our vision with others.
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
