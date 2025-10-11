import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import ClinicalEyes1 from "../assets/Ceyes.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const handleNavigation = (href) => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(href);
  };

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "shadow-md backdrop-blur-md bg-white/80" : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto flex justify-between items-center px-5 h-[75px]">
          {/* Logo */}
          <Link to="/" onClick={() => handleNavigation("/")}>
            <img
              src={ClinicalEyes1}
              alt="Clinical Eyes Logo"
              className="h-20 md:h-24 w-auto cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavigation(item.href)}
                  className={`relative text-[16px] font-sans font-medium transition-all duration-300 cursor-pointer ${
                    location.pathname === item.href
                      ? "text-teal-600 border-b-2 border-teal-600"
                      : "text-gray-800 hover:text-teal-600 hover:border-b-2 hover:border-teal-500"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div className="lg:hidden z-50">
            {isMenuOpen ? (
              <CgClose
                className="text-3xl text-gray-800 cursor-pointer transition-transform duration-300 hover:rotate-90"
                onClick={handleMenuToggle}
              />
            ) : (
              <HiOutlineMenuAlt1
                className="text-3xl text-gray-800 cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={handleMenuToggle}
              />
            )}
          </div>
        </nav>

        {/* 📱 Mobile Menu (Stylish top-down animation + glassmorphism) */}
        <div
          ref={dropdownRef}
          className={`absolute left-0 right-0 backdrop-blur-lg bg-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-t border-gray-100 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.3,1)] transform ${
            isMenuOpen
              ? "max-h-[420px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          }`}
        >
          <ul className="flex flex-col gap-4 p-6">
            {navigationItems.map((item, index) => (
              <li
                key={item.name}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
                className={`transform transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                <button
                  onClick={() => handleNavigation(item.href)}
                  className={`block w-full text-center text-[17px] font-medium py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === item.href
                      ? "text-teal-600 bg-teal-50"
                      : "text-gray-800 hover:bg-gray-100 hover:text-teal-600"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Background Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 animate-fadeIn"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
