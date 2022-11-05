import React from "react";
import "./App.css";
import "./style/index.css";
import Home from "./components/Main/main";
import NotFoundPage from "./NotFound404.js";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "@lottiefiles/lottie-player";

function App() {
  
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
