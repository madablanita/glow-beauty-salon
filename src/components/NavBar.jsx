import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { navigation } from "../constants";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, url) => {
    e.preventDefault();
    const el = document.querySelector(url);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-orange-700/30 backdrop-blur-lg shadow-md"
          : "bg-orange-700/30 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <a href="#" className="text-xl sm:text-2xl font-bold text-orange-600">
          GLOW Beauty Salon
        </a>

        <div className="hidden sm:flex items-center space-x-6">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={(e) => handleNavClick(e, item.url)}
              className="text-orange-600 hover:text-orange-700 transition font-medium"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-orange-700 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-orange-600/30 backdrop-blur-lg p-4 space-y-4">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={(e) => handleNavClick(e, item.url)}
              className="block text-orange-600 hover:text-orange-700 transition font-medium"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
