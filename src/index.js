import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./moralis.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";
import { BrowserRouter} from "react-router-dom";

// const theme = extendTheme({
//   config: {
//     initialColorMode: "dark",
//     useSystemColorMode: false,
//   },
// });

const appId = "01ASI6PuLbcTooK4dIej8b6JbGnfcNKhwsRFiCbW";
const serverUrl = "https://jhbhk3g0cq0u.usemoralis.com:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      {/* <ChakraProvider theme={theme}> */}
        <BrowserRouter>
            <App/>
        </BrowserRouter>
      {/* </ChakraProvider> */}
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
