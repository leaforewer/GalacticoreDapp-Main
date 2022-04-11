import React from "react";
import "./App.css";
import "./index.css";
import Home from "./Home.js";
import Mint from "./Mint.js";
import { Route, Routes} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
      </Routes>
    </div>
  );
}

export default App;
