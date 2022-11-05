import React from "react";
import "@lottiefiles/lottie-player";

function Faq() {
  return (
    <div id="faq">
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div className="container faq-main">
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
        <div className="row">
          <div className="col-lg-4 d-flex align-center">
            <div className="faq-img">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_abwhds4i.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="col-lg-8">
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
                    NFT means None Fungible Token.All of the tokens are linked
                    to an image. This makes these tokens unique and different
                    from each other.
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
                    Galacticore is a NFT series of 3333 unique NFTs. When you
                    mint a Galacticore NFT, you are actually minting your future
                    in-game character for upcoming play and earn game.
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
                    You can be eligible for whitelist by entering giveaways or
                    being active in community. You can also get whitelist by
                    just being active in our discord channel. Most active users
                    in our discord server will get whitelist.
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
                    <li>#Aptos</li>
                    <li>#Mint</li>
                  </ul>

                  <i className="icon-faq ion-md-arrow-forward"></i>
                  <i className="icon-faq ion-md-arrow-down"></i>
                </a>
                <div className="answer">
                  <ul>
                    <li>2.99 APTOS for public sale</li>
                    <li>1.99 APTOS for presale</li>
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
                    Galacticore is a mining (Idle) based play and earn. In this
                    game you'll be able to mine around the universe. You will
                    get items by mining rewards and fight with other players
                    from other planets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
