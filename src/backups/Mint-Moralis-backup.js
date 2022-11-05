import { useState } from "react";
import galacticoreImg from "./images/Nav/Galacticore-logotext.png";
import metamaskImg from "./images/Nav/metamask.png";
import MintP1 from "./images/Mint/1.png";
import MintP2 from "./images/Mint/2.png";
import MintP3 from "./images/Mint/3.png";
import MintP4 from "./images/Mint/4.png";
import MintP5 from "./images/Mint/5.png";
import MintP6 from "./images/Mint/6.png";

function Mint() {
  const {
    authenticate,
    isAuthenticated,
    logout,
    isAuthenticating,
    authError,
    user,
    Moralis,
  } = useMoralis();

  // Get current User Balance and Token ID
  const { data: balance, nativeToken } = useNativeBalance();
  // Public/Pre Page Statements
  const isPresaleActive = false;
  const isPublicsaleActive = false;

  // Contract Variables
  const CONTRACTADDRESS = "0xbF6071400E3f08906209EFd4E422073CbAD4afe4";
  const PublicSaleABI = [
    {
      inputs: [
        { internalType: "uint256", name: "_mintAmount", type: "uint256" },
      ],
      name: "publicsaleMint",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
  ];
  const FunctionPublicSale = "publicsaleMint";
  const PreSaleABI = [
    {
      inputs: [
        { internalType: "uint256", name: "_mintAmount", type: "uint256" },
      ],
      name: "presaleMint",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
  ];
  const FunctionPreSale = "presaleMint";
  const CurrentMintABI = [
    {
      inputs: [],
      name: "_currentMint",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
  ];

  // Mint Amount Calculator Public
  let [PublicNum, setPublicNum] = useState(0);
  let incPublicNum = () => {
    if (PublicNum < 10) {
      setPublicNum(Number(PublicNum) + 1);
    }
  };
  let decPublicNum = () => {
    if (PublicNum > 0) {
      setPublicNum(PublicNum - 1);
    }
  };
  let handlePublicChange = (e) => {
    setPublicNum(e.target.Publicvalue);
  };

  let PublicVal = useState(0);
  PublicVal = parseFloat(1.2 * PublicNum).toFixed(1);

  // Mint Amount Calculator Pre
  let [PreNum, setPreNum] = useState(0);
  let incPreNum = () => {
    if (PreNum < 10) {
      setPreNum(Number(PreNum) + 1);
    }
  };
  let decPreNum = () => {
    if (PreNum > 0) {
      setPreNum(PreNum - 1);
    }
  };
  let handlePreChange = (e) => {
    setPreNum(e.target.Prevalue);
  };

  let PreVal = useState(0);
  PreVal = parseFloat(1 * PreNum).toFixed(1);

  // Get Transaction
  if (isAuthenticated) {
    var getAddress = user.get("ethAddress");
    var getAddressUrl =
      "https://testnet.snowtrace.io/address/" +
      CONTRACTADDRESS +
      "?fromaddress=" +
      getAddress;
  }

  function onCompletedTransaction() {
    const onCompletedAlert = document.querySelector("div#oncompleted");
    onCompletedAlert.classList.add("revealCompleted");
  }

  // Run Contract Function Pre/Public Sale
  const { runContractFunction, contractResponse, error, isLoading } =
    useWeb3Contract({
      abi: PreSaleABI,
      contractAddress: CONTRACTADDRESS,
      functionName: FunctionPreSale,
      params: {
        _mintAmount: PreNum,
      },
      msgValue: Moralis.Units.ETH(PreVal),
    });
  // Read Current Mint Function
  const readCurrentMint = {
    contractAddress: CONTRACTADDRESS,
    functionName: "_currentMint",
    abi: CurrentMintABI,
  };

  const currentmint = Moralis.executeFunction(readCurrentMint);

  window.onload = currentmint.then(function (result) {
    let currentMintValue = result.toString();
    document.querySelector("span#minted").innerHTML = currentMintValue;
  });

  return (
    <div className="Mint">
      {authError && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Authentication has failed</strong>
          <br />
          {authError.message}
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      {isAuthenticated && (
        <>
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>Authentication approved.</strong>
            <br /> with <b>{user.get("ethAddress")}</b>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div id="oncompleted" className="">
            {" "}
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <b>Transaction completed.</b>
              <br /> Thank you for your purchase. We appreciate your support &
              We hope to see you in
              <b> the Galacticore Universe.</b>
              <br />
              You can see transaction history under your address
              <br /> of{" "}
              <a target="_blank" rel="noreferrer" href={getAddressUrl}>
                <b>{user.get("ethAddress")}</b>
              </a>
            </div>
          </div>
        </>
      )}
      <nav id="navbar" className="main-nav navbar mint-nav">
        <a id="logo" href="/" className="logo d-flex align-items-center">
          <div className="navHead">
            <img loading="lazy" src={galacticoreImg} alt="Logo" />
          </div>
        </a>
        <ul className="navbar-nav my-auto">
          <li className="connections">
            {isAuthenticated ? (
              <>
                <button
                  onClick={logout}
                  className="btn btn-sm animated-button thar-two"
                >
                  Logout{" "}
                </button>
                <h5 className="user-info">
                  Account: <b>{user.get("ethAddress").slice(0, 8) + "..."}</b>
                  <br />
                  Balance:{" "}
                  <b className="bold-g">
                    {balance.formatted}
                    {/* {console.log(nativeToken)} */}
                  </b>
                </h5>
              </>
            ) : (
              <>
                <Button
                  isLoading={isAuthenticating}
                  onClick={() => {
                    authenticate(
                      { signingMessage: "Authorizing for Galacticore Galaxy" },
                      { provider: "metamask" },
                      { chainId: "43113" }
                    );
                  }}
                  className="btn btn-sm animated-button thar-three"
                >
                  Sign in with{" "}
                  <img
                    loading="lazy"
                    src={metamaskImg}
                    width="32"
                    height="32"
                    className="connect-logo"
                    alt="metamask"
                  />
                </Button>
                {/* <div className="connect-or">
                  <b>OR</b>
                </div> */}
                {/* <Button
                  isLoading={isAuthenticating}
                  onClick={() => AuthWalletConnect()}
                  className="btn btn-sm animated-button thar-four"
                >
                  Connect With{" "}
                  <img loading="lazy"
                    src={walletconnectImg}
                    width="32"
                    height="32"
                    className="connect-logo"
                    alt="walletconnect"
                  />
                </Button> */}
              </>
            )}
          </li>
        </ul>
      </nav>
      <div className="main-mint">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className=" mint-main-page">
                {isAuthenticated ? (
                  <>
                    {isPublicsaleActive ? (
                      <>
                        <div>
                          <div className="mint-header">
                            <div>Mint Galacticore NFTs!</div>
                            <p>
                              Owning <b> a Galacticore NFT</b> will get you
                              access to exclusive <b>Rewards</b> and to our{" "}
                              <b>future P&E MMORPG Game </b> which you will have
                              exclusive contents, perks and more!
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          {nativeToken.symbol === "AVAX" ? (
                            <div className="col-lg-6 col-md-12 col-sm-12 mint-template">
                              <div className="mint-card-body">
                                <div className="mint-card-contents">
                                  <div className="mint-card-head">
                                    <div>Publicsale Mint</div>
                                    {isAuthenticated && (
                                      <span id="minted"></span>
                                    )}
                                    <span> Nfts Minted</span>
                                  </div>
                                  <div className="alert alert-warning">
                                    Please make sure to set your{" "}
                                    <b>Metamask Network </b> to
                                    <b> Avalanche Mainnet</b>
                                  </div>
                                  <div className="mint-card-items">
                                    <div className="item-1">
                                      <div className="mint-item-l">Balance</div>
                                      <div className="mint-item-r">
                                        1.2 Avax
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="item-2">
                                      {/* Amount Buttons here */}
                                      <div className="mint-item-l">Amount</div>
                                      <div className="mint-item-r">
                                        <div className="input-group">
                                          <div className="input-group-prepend">
                                            <div
                                              className="incDecButton"
                                              onClick={decPublicNum}
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="38"
                                                height="38"
                                                fill="currentColor"
                                                className="bi bi-dash"
                                                viewBox="0 0 16 16"
                                              >
                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                              </svg>
                                            </div>
                                          </div>
                                          <input
                                            type="text"
                                            readOnly
                                            className="form-control mintAmountcounter"
                                            value={PublicNum}
                                            onChange={handlePublicChange}
                                          />
                                          <div className="input-group-prepend">
                                            <div
                                              className="incDecButton"
                                              onClick={incPublicNum}
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="38"
                                                height="38"
                                                fill="currentColor"
                                                className="bi bi-plus"
                                                viewBox="0 0 16 16"
                                              >
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="item-3">
                                      <div className="mint-item-l">Total</div>
                                      <div className="mint-item-r">
                                        {parseFloat(1.2 * PublicNum).toFixed(1)}{" "}
                                        Avax
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="item-4">
                                      <div>
                                        <Button
                                          className="mint-button btn btn-lg animated-button thar-three"
                                          // onClick={() => publicSaleMint(1.2)}
                                          onClick={() =>
                                            runContractFunction({
                                              onSuccess: () =>
                                                onCompletedTransaction(),
                                            })
                                          }
                                          disabled={isLoading}
                                          isLoading={isLoading}
                                        >
                                          Mint NFT
                                        </Button>

                                        {error && (
                                          <div className="alert alert-danger">
                                            {error.message}
                                          </div>
                                        )}
                                        {contractResponse &&
                                          JSON.stringify(contractResponse)}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="col-lg-6 col-md-12 d-flex align-items-center">
                              <div className="alert alert-danger">
                                Please make sure to set your{" "}
                                <b>Metamask Network </b> to
                                <b> Avalanche Mainnet</b>
                              </div>
                            </div>
                          )}
                          <div className="col-lg-6 col-md-12 mint-profile">
                            {" "}
                            <div className="bio-img">
                              <img
                                loading="lazy"
                                src={MintP4}
                                alt="Showcase-Nft"
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Public sale Closed */}
                        {isPresaleActive ? (
                          <>
                            <div>
                              <div className="mint-header">
                                <div>Galacticore Presale!</div>
                                <p>
                                  Early supporters can mint up to
                                  <b> 5 Galacticore NFTs </b> at a discounted
                                  price of <b>1 Avax</b>. Learn how to get
                                  access{" "}
                                  <a href="https://discord.gg/qfvsNag6rj">
                                    {" "}
                                    in our Discord
                                  </a>
                                  .<br />
                                  Owning <b> a Galacticore NFT</b> will get you
                                  access to exclusive <b>Rewards</b> and to our{" "}
                                  <b>future P&E MMORPG Game </b> which you will
                                  have exclusive contents, perks and more!
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              {nativeToken.symbol === "AVAX" ? (
                                <div className="col-lg-6 col-md-12 col-sm-12 mint-template">
                                  <div className="mint-card-body">
                                    <div className="mint-card-contents">
                                      <div className="mint-card-head">
                                        <div>Presale Mint</div>
                                        {isAuthenticated && (
                                          <span id="minted"></span>
                                        )}
                                        <span> Nfts Minted</span>
                                      </div>
                                      <div className="alert alert-warning">
                                        Please make sure to set your{" "}
                                        <b>Metamask Network </b> to
                                        <b> Avalanche Mainnet</b>
                                      </div>
                                      <div className="mint-card-items">
                                        <div className="item-1">
                                          <div className="mint-item-l">
                                            Balance
                                          </div>
                                          <div className="mint-item-r">
                                            1 Avax
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="item-2">
                                          {/* Amount Buttons here */}
                                          <div className="mint-item-l">
                                            Amount
                                          </div>
                                          <div className="mint-item-r">
                                            <div className="input-group">
                                              <div className="input-group-prepend">
                                                <div
                                                  className="incDecButton"
                                                  onClick={decPreNum}
                                                >
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="38"
                                                    height="38"
                                                    fill="currentColor"
                                                    className="bi bi-dash"
                                                    viewBox="0 0 16 16"
                                                  >
                                                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                  </svg>
                                                </div>
                                              </div>
                                              <input
                                                type="text"
                                                readOnly
                                                className="form-control mintAmountcounter"
                                                value={PreNum}
                                                onChange={handlePreChange}
                                              />
                                              <div className="input-group-prepend">
                                                <div
                                                  className="incDecButton"
                                                  onClick={incPreNum}
                                                >
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="38"
                                                    height="38"
                                                    fill="currentColor"
                                                    className="bi bi-plus"
                                                    viewBox="0 0 16 16"
                                                  >
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="item-3">
                                          <div className="mint-item-l">
                                            Total
                                          </div>
                                          <div className="mint-item-r">
                                            {parseFloat(1 * PreNum).toFixed(1)}{" "}
                                            Avax
                                          </div>
                                        </div>
                                        <hr />
                                        <div className="item-4">
                                          <div>
                                            <Button
                                              className="mint-button btn btn-lg animated-button thar-three"
                                              // onClick={() => publicSaleMint(1.2)}
                                              onClick={() =>
                                                runContractFunction({
                                                  onSuccess: () =>
                                                    onCompletedTransaction(),
                                                })
                                              }
                                              disabled={isLoading}
                                              isLoading={isLoading}
                                            >
                                              Mint NFT
                                            </Button>

                                            {error && (
                                              <div className="alert alert-danger">
                                                {error.message}
                                              </div>
                                            )}
                                            {contractResponse &&
                                              JSON.stringify(contractResponse)}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="col-lg-6 col-md-12 d-flex align-items-center">
                                  <div className="alert alert-danger">
                                    Please make sure to set your{" "}
                                    <b>Metamask Network </b> to
                                    <b> Avalanche Mainnet</b>
                                  </div>
                                </div>
                              )}
                              <div className="col-lg-6 col-md-12 mint-profile">
                                {" "}
                                <div className="bio-img">
                                  <img
                                    loading="lazy"
                                    src={MintP1}
                                    alt="Showcase-Nft"
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="mint-header not-active">
                              <div>
                                Galacticore Sales are not active at the moment!
                              </div>
                              <p>
                                Our team is working hard to launch our NFT
                                series. Follow us on{" "}
                                <span className="social-media-mint">
                                  <a href="https://twitter.com/GalacticoreNFT">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      className="bi bi-twitter"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                  </a>
                                </span>
                                <span className="amp">&</span>
                                <span className="social-media-mint">
                                  <a href="https://discord.gg/qfvsNag6rj">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      className="bi bi-discord"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                                    </svg>
                                  </a>
                                </span>{" "}
                                to get latest updates about the minting
                                progress!{" "}
                              </p>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <div className="mint-default-page">
                      <div className="row">
                        <div className="col-md-10 col-sm-12">
                          <div className="mint-default-head">
                            <h2>
                              Get an exclusive NFT Avatar with different rarity
                              and traits
                            </h2>
                            <div className="mint-default-desc">
                              Galacticore NFT avatars is a collection of 3333
                              unique avatars, randomly-generated on the
                              blockchain. Each avatar has unique traits and
                              rarity. All Avatars holders will get rewards by
                              the time they hold & crypto features and a free
                              giveaways, the ERC-20 token that will power the
                              upcoming Galacticore Community Token Platform.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mint-items">
                        <div className="row">
                          <div className="col-lg-4 col-sm-6">
                            <div className="mint-card-nft">
                              <img
                                loading="lazy"
                                className="mint-nft-image"
                                src={MintP1}
                                alt="Mint-card"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-6">
                            <div className="mint-card-nft">
                              <img
                                loading="lazy"
                                className="mint-nft-image"
                                src={MintP3}
                                alt="Mint-card"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-6">
                            <div className="mint-card-nft">
                              <img
                                loading="lazy"
                                className="mint-nft-image"
                                src={MintP2}
                                alt="Mint-card"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-6">
                            <div className="mint-card-nft">
                              <img
                                loading="lazy"
                                className="mint-nft-image"
                                src={MintP4}
                                alt="Mint-card"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-6">
                            <div className="mint-card-nft">
                              <img
                                loading="lazy"
                                className="mint-nft-image"
                                src={MintP5}
                                alt="Mint-card"
                              />
                            </div>
                          </div>
                          <div className="col-lg-4 col-sm-6">
                            <div className="mint-card-nft">
                              <img
                                loading="lazy"
                                className="mint-nft-image"
                                src={MintP6}
                                alt="Mint-card"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id="footer">
        <div className="container-fluid bottom">
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

export default Mint;
