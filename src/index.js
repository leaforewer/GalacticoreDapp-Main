import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./moralis.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

const appId = "01ASI6PuLbcTooK4dIej8b6JbGnfcNKhwsRFiCbW";
const serverUrl = "https://jhbhk3g0cq0u.usemoralis.com:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
            <App/>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
