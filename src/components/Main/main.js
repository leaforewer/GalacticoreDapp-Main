import React, { useState, useEffect } from "react";
import Home from "../Home/home";
import About from "../About/about";
import Roadmap from "../Roadmap/roadmap";
import Navbar from "../Nav/navbar";
import Team from "../Team/team";
import Faq from "../Faq/faq";
import Footer from "../Footer/footer";

function Main() {
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
    <div className="Home">
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
        <main className="main" id="content">
          {/* Navbar */}
          <Navbar />
          {/* Home */}
          <Home />
          {/* About */}
          <About />
          {/* Roadmap */}
          <Roadmap />
          {/* Team */}
          <Team />
          {/* FAQ */}
          <Faq />
          {/* Footer */}
          <Footer />
        </main>
      )}
    </div>
  );
}

export default Main;
