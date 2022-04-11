import {
  Button,
  Alert,
  AlertIcon,
  Box,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { useState } from "react";
import galacticoreImg from "./images/Nav/Galacticore-logotext.png";
import metamaskImg from "./images/Nav/metamask.png";
// import walletconnectImg from "./images/Nav/walletconnect-logo.png";

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

  const contractProcessor = useWeb3ExecuteFunction();

  // async function AuthWalletConnect() {
  //   const user = await Moralis.authenticate({ provider: "walletconnect" });
  // }

  // const CONTRACT_ADDRESS = "0x8e9f4d55dfcfa47ccd5dca57e3d2600ac3862183";
  const isPublicsaleActive = false;
  const isPresaleActive = false;

  async function getTransfers() {
    const query = new Moralis.Query("Transfers");
    const transfers = await query.find();
    console.log(transfers);
  }

  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };

  async function publicSaleMint(val) {
    val = val * num;

    // let _amount = document.getElementById('mint-amount').value;
    let options = {
      contractAddress: "0x89ceFef114EdDDDEE1ACea9EB1760bf134Bfd09a",
      functionName: "publicsaleMint",
      abi: [
        {
          inputs: [
            { internalType: "uint256", name: "_mintAmount", type: "uint256" },
          ],
          name: "publicsaleMint",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
      params: {
        _mintAmount: num,
      },
      msgValue: Moralis.Units.ETH(val),
    };
    await contractProcessor.fetch({
      params: options,
    });
  }

  return (
    <div className="Mint">
      {authError && (
        <Alert status="error">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Authentication has failed</AlertTitle>
            <AlertDescription display="block">
              {authError.message}
            </AlertDescription>
          </Box>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      )}
      {isAuthenticated && (
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
      )}
      <nav id="navbar" className="main-nav navbar mint-nav">
        <a id="logo" href="/" className="logo ml-5 d-flex align-items-center">
          <div className="navHead">
            <img src={galacticoreImg} alt="Logo" />
          </div>
        </a>
        <ul className="navbar-nav mr-5 my-auto" id="NavItems">
          <li className="connections">
            {isAuthenticated ? (
              <>
                <button
                  onClick={logout}
                  className="btn btn-sm animated-button thar-two"
                >
                  Logout{" "}
                </button>
                <h5>
                  Account: <b>{user.get("ethAddress").slice(0, 8) + "..."}</b>
                </h5>
              </>
            ) : (
              <>
                <Button
                  isLoading={isAuthenticating}
                  onClick={() => {
                    authenticate();
                  }}
                  className="btn btn-sm animated-button thar-three"
                >
                  Sign in with{" "}
                  <img
                    src={metamaskImg}
                    width="32"
                    height="32"
                    className="connect-logo"
                    alt="metamask"
                  />
                </Button>
                <div className="connect-or">
                  <b>OR</b>
                </div>
                {/* <Button
                  isLoading={isAuthenticating}
                  onClick={() => AuthWalletConnect()}
                  className="btn btn-sm animated-button thar-four"
                >
                  Connect With{" "}
                  <img
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
                        <div className="row">
                          <div className="col-9 offset-2">
                            <div className="mint-header">
                              <div>Mint Galacticore NFTs!</div>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy
                              </p>
                            </div>
                          </div>
                          <div className="col-6 mint-template">
                            <div className="mint-card-body">
                              <div className="mint-card-contents">
                                <div className="mint-card-head">
                                  <div>Publicsale Mint</div>
                                  <p>X NFTs minted</p>
                                </div>
                                <div className="mint-card-items">
                                  <div className="item-1">
                                    <div className="mint-item-l">Balance</div>
                                    <div className="mint-item-r">1.2 Avax</div>
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
                                            onClick={decNum}
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
                                          value={num}
                                          onChange={handleChange}
                                        />
                                        <div className="input-group-prepend">
                                          <div
                                            className="incDecButton"
                                            onClick={incNum}
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
                                      {parseFloat(1.2 * num).toFixed(1)} Avax
                                    </div>
                                  </div>
                                  <hr />
                                  <div className="item-4">
                                    <div className="mint-button">
                                      <Button
                                        onClick={() => publicSaleMint(1.2)}
                                      >
                                        Mint NFT
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 mint-profile"></div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Public sale Closed */}
                        {isPresaleActive ? (
                          <>
                            Presale is active
                            <div className="row">
                              <div className="col-9 offset-2">
                                <div className="mint-header">
                                  <div>Galacticore Presale!</div>
                                  <p>
                                    Early supporters can mint up to 5
                                    Galacticore NFTs at a discounted price of 1
                                    Avax. Learn how to get access in{" "}
                                    <a> in our Discord</a>
                                  </p>
                                </div>
                              </div>
                              <div className="col-6 mint-template">
                                <div className="mint-card-body">
                                  <div className="mint-card-contents">
                                    <div className="mint-card-head">
                                      <div>Presale Mint</div>
                                      <p>X NFTs minted</p>
                                    </div>
                                    <div className="mint-card-items">
                                      <div className="item-1">
                                        <div className="mint-item-l">
                                          Balance
                                        </div>
                                        <div className="mint-item-r">
                                          1.2 Avax
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
                                                onClick={decNum}
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
                                              value={num}
                                              onChange={handleChange}
                                            />
                                            <div className="input-group-prepend">
                                              <div
                                                className="incDecButton"
                                                onClick={incNum}
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
                                          {parseFloat(1.2 * num).toFixed(1)}{" "}
                                          Avax
                                        </div>
                                      </div>
                                      <hr />
                                      <div className="item-4">
                                        <div className="mint-button">
                                          <Button
                                            onClick={() => publicSaleMint(1.2)}
                                          >
                                            Mint NFT
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6 mint-profile"></div>
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
                                series. Follow us on <span className="social-media-mint">
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
                                <a href="https://discord.gg/7AZVkfEASb">
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
                                to get latest updates about the minting progress!{" "}
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

                  </div>
                  </>
                )}

                
              </div>
            </div>
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
                            href="https://discord.gg/7AZVkfEASb"
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
                        <li className="footer-link">
                          <a href="https://marketplace.kalao.io/">
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

export default Mint;
