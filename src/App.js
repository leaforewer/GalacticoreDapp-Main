import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Home from "./Home.js";
import Mint from "./Mint.js";
import NotFoundPage from "./NotFound404.js";
import Documentation from "./Doc.js";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "@lottiefiles/lottie-player";

function App() {
  const [loading, setLoading] = useState(false);
  const playerStyle = {
    width: "50%",
    height: "100%",
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="spinner-item">
          <lottie-player
            src="https://assets10.lottiefiles.com/private_files/lf30_rn8hog3p.json"
            background="transparent"
            speed="1"
            loop
            style={playerStyle}
            autoplay
          ></lottie-player>
        </div>
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/mint" element={<Mint />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
