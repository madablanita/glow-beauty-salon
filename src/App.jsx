import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Artists from "./components/Artists";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#fdf6ee] to-[#f9f3e9] dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-500">
      <NavBar />
      <main>
        <Home isHome={true} />
        <About />
        <Services />
        <Artists />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
