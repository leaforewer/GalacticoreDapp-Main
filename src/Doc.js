import React from "react";
import galacticoreLogo from "./images/Galacticore-Logo/logo512.png";
import galacticoreImg from "./images/Nav/Galacticore-logotext.png";
import "./Doc.css";
import { Link } from "react-router-dom";

function Documentation() {
  return (
    <div id="documentation">
      <nav className="navbar doc-nav navbar-expand-md fixed-top">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link to="/documentation#intro">
              <img src={galacticoreLogo} alt="galacticore logo" />
              Galacticore
              <div className="nav-desc">Docs</div>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav navbar-doc-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="doc-nav-link nav-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/GalacticoreNFT"
                >
                  <i className="bx bxl-twitter"></i>Twitter
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="doc-nav-link nav-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://discord.gg/qfvsNag6rj"
                >
                  <i className="bx bxl-discord"></i>
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid" id="doc-main">
        <div className="row">
          <div className="col-lg-3">
            {" "}
            <div id="sidebar" className="d-flex flex-column flex-shrink-0 ">
              <ul className="doc-side-nav nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                  <a href="#intro" className="doc-link nav-link ">
                    <i className="bx bx-book-alt"></i>
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#goal" className=" doc-link nav-link ">
                    <i className="bx bx-target-lock"></i>
                    Aim of Galacticore
                  </a>
                </li>
                <li>
                  <a href="#faqs" className="doc-link nav-link ">
                    <i className="bx bx-question-mark"></i>
                    F.A.Q
                  </a>
                </li>
                <li>
                  <a href="#roadmap" className="doc-link nav-link ">
                    <i className="bx bx-map-alt"></i>
                    Roadmap
                  </a>
                </li>
                <li>
                  <a href="#reward" className="doc-link nav-link ">
                    <i className="bx bx-coin"></i>
                    What is Galactic Rewarding System
                  </a>
                </li>
                <li>
                  <a href="#nft" className="doc-link nav-link ">
                    <i className="bx bx-bot"></i>
                    How NFT's wil be distrubuted
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 doc-content">
            <section id="intro">
              <h2>Welcome</h2>
              <p>
                {" "}
                Welcome to Galacticore, <br />a Play and Earn Game exclusively
                on <strong>Avalanche Network</strong>.<br />
                <br />
                This litepaper will provide you the<strong>
                  {" "}
                  all details
                </strong>{" "}
                that you need to outline
                <br /> Who are we, What are we trying to achieve,{" "}
                <strong>AND</strong> What is ahead for you and us?
              </p>
            </section>
            <section id="goal">
              <h2>Aim Of Galacticore</h2>
              <p>
                Galacticore aims to start as <strong>a NFT project</strong> and
                continue as <strong>a P2E game project</strong> after successful
                launch of the game.
                <br />
                <br />
                <strong> Main idea</strong> behind the game is making the game{" "}
                <strong>“fun-to-play”</strong> instead of just playing for
                earning. <br />
                <br />
                To build a community we decided to{" "}
                <strong>share 100% of the royalty shares</strong>. With the help
                of royalty shares and
                <strong>Galactic Rewarding system</strong> we want to go forward
                with our community and build the game together with their
                suggestions.
              </p>
            </section>
            <section id="faqs">
              <h2>Frequently Asked Questions</h2>
              <br />
              <h4>WHAT IS GALACTICORE NFT SERIES?</h4>
              <p>
                Galacticore is a NFT series of <strong>3333</strong> unique
                NFTs. <br />
                NFTs which minted will be used as characters in the future
                <strong> #P2E game</strong>.
              </p>
              <br />
              <br />
              <h4>WHAT IS THE PRICE OF GALACTICORE NFTS?</h4>
              <p>
                Public sale is <strong>1.2 AVAX </strong>| Presale price is{" "}
                <strong>1 AVAX</strong>.
              </p>
              <br />
              <br />
              <h4>WHAT IS GALACTICORE P2E GAME?</h4>
              <p>
                Galacticore game is a mining focused play and earn game which is
                played around the universe. In this game players will mine
                different ores from different planets. With the help of ores,
                players will buy stronger items to get stronger and fight
                against other players to dominate the universe with their
                strength.
              </p>
            </section>
            <section id="roadmap">
              <h2>What Is Our Roadmap?</h2>
              <br />
              <div className="col-6">
                <h4>Q2 2022</h4>
                <p>
                  <li>Release of Galacticore NFT series.</li>
                  <li>Rewarding community for holding NFT.</li>
                  <li>Different community tiers.</li>
                </p>
              </div>
              <br />
              <div className="offset-6 col-6 text-right">
                <h4>Q3 2022</h4>
                <p>
                  <li>Token launch.</li>
                  <li> Daily token rewards for NFT stakers.</li>
                </p>
              </div>{" "}
              <br />
              <div className="col-6 ">
                <h4>Q4 2022</h4>
                <p>
                  <li>Launch of #P2E mini game.</li>
                  <li>Beta test of main #P2E game</li>
                </p>
              </div>{" "}
              <br />
              <div className="offset-6 col-6 text-right">
                <h4>Q1 2023</h4>
                <p>
                  <li>Launch of main #P2E game.</li>
                </p>
              </div>
            </section>
            <section id="reward">
              <h2>What is Galactic Rewarding System</h2>
              <p>
                People whoever<strong> mint our NFTs and hold</strong> the same
                or more amount of NFTs, will be eligible for the rewarding
                system. <br />
                <br />
                <strong>10% of the total earnings</strong> from the minting.
                Rewards will be distrubuted monthly and holders will be eligible
                to claim one third of their <strong>Rewards</strong> each month
                for three months.
              </p>
            </section>
            <section id="nft">
              <h2>How NFTS Will Be Distrubuted</h2>
              <p>
                <strong>261</strong> total Whitelisted users will be eligible to
                mint 3 NFTs
                <br />
                <br />
                Maximum <strong>783 NFTs</strong> will be distrubuted{" "}
                <strong>via presale</strong> <br />
                <br />
                <strong>100 NFTs</strong> for{" "}
                <strong>team and marketing</strong>
                <br />
                <br /> Minimum 2450 NFTs distrubuted{" "}
                <strong>via public sale</strong>
              </p>
            </section>
          </div>
        </div>
      </div>
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
    </div>
  );
}
export default Documentation;
