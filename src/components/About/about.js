import React from "react";
import Typical from "react-typical";
import { Fade } from "react-awesome-reveal";
import aboutgif from "../images/About/about-gif.gif";

function About() {
 
  return (
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
                      <span className="mark">#PlayAndEarn</span> game which is
                      planned to be released in{" "}
                      <span className="date-font">Q1 2023</span>. Before the
                      game's release, it was released as a NFT series of the
                      game. These NFTs will be used in our future games.
                    </div>
                    <div>
                      These NFTs are generally for{" "}
                      <span className="mark">rewarding</span> and building a{" "}
                      <span className="mark">community</span> before the actual
                      game launch.
                    </div>
                    <div>
                      We built these NFTs as
                      <span className="mark">perfect</span> as possible to also
                      let them to be used as{" "}
                      <span className="mark">avatars</span> for the buyers.
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="col-lg-6 col-sm-12 center-center mbl-d-none tblt-d-none">
                <Fade triggerOnce="true" direction="right">
                  <div className="bio-img">
                    <img loading="lazy" src={aboutgif} alt="AboutImage" />
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
