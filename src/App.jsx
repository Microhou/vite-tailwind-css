import React, { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { NavBar } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sectiions/Home";
import { About } from "./components/sectiions/About";
import "./index.css";
import { Projects } from "./components/sectiions/Projects";
import Contact from "./components/sectiions/Contact";

function App() {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!loading ? <LoadingScreen onComplete={() => setLoading(true)} /> : null}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          loading ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
