import React from "react";
import { Fade } from "react-awesome-reveal";
import founder1 from "../images/Team/f2.png";
import founder2 from "../images/Team/f1.png";
import artist from "../images/Team/artist.png";
import marketingman from "../images/Team/marketingman.png";
import "@lottiefiles/lottie-player";

function Team() {
  return (
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
                <div className="team-card my-lg-5 my-sm-0 col-6 col-sm-6 col-md-6 col-lg-4   ">
                  <Fade triggerOnce="true">
                    <div className="team-bio-img">
                      <img loading="lazy" src={founder1} alt="Founder" />
                    </div>
                    <div className="team-name">
                      <h4>Leaforever</h4>
                    </div>
                    <div className="team-position">
                      <h5>CO-Founder</h5>
                    </div>
                  </Fade>
                </div>
                <div className=" team-card my-lg-5 my-sm-0 col-6 col-sm-6 col-md-6 col-lg-4   ">
                  <Fade triggerOnce="true">
                    <div className="team-bio-img">
                      <img loading="lazy" src={founder2} alt="Founder" />
                    </div>
                    <div className="team-name">
                      <h4>Ferrosia</h4>
                    </div>
                    <div className="team-position">
                      <h5>CO-Founder</h5>
                    </div>
                  </Fade>
                </div>
                <div className="my-lg-5 my-sm-0 col-sm-12 col-md-12 col-lg-4  "></div>
                <div className="my-lg-5 my-sm-0 col-sm-12 col-md-12 col-lg-4   mbl-d-none"></div>
                <div className="team-card my-lg-5 my-sm-0 col-6 col-sm-6 col-md-6 col-lg-4   ">
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
                <div className="team-card my-lg-5 my-sm-0 col-6 col-sm-6 col-md-6 col-lg-4   ">
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
                </div>{" "}
                <div className="my-lg-5 my-sm-0 col-sm-12 col-md-12 col-lg-4  dsktp-d-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
