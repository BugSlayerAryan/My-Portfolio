import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    // Scroll to the section smoothly
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition duration-300">
      <div
        className={`transition duration-300 ${
          isScrolled
            ? "bg-[#0e0b20] bg-opacity-90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-10 xl:px-16 2xl:px-24 py-5 flex justify-between items-center text-white">
          {/* Logo */}
          <div className="text-2xl font-bold cursor-pointer group transition-transform duration-300 hover:scale-105">
            <span className="text-[#8245ec] group-hover:text-[#a86ef9]">&lt;</span>
            <span className="text-white">Aryan</span>
            <span className="text-[#8245ec] group-hover:text-[#a86ef9]">/</span>
            <span className="text-white">Behera</span>
            <span className="text-[#8245ec] group-hover:text-[#a86ef9]">&gt;</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`transition duration-200 hover:text-[#a86ef9] ${
                    activeSection === item.id ? "text-[#a86ef9]" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/BugSlayerAryan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#a86ef9] transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-behera-0009877554567899643"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#a86ef9] transition"
            >
              <FaLinkedin size={22} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#a86ef9] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#a86ef9] cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-11/12 bg-[#0e0b20] bg-opacity-90 backdrop-blur-lg rounded-xl shadow-xl md:hidden z-50">
          <ul className="flex flex-col items-center space-y-4 py-6 text-gray-300 text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`hover:text-white transition ${
                    activeSection === item.id ? "text-[#a86ef9]" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-5 pt-2">
              <a
                href="https://github.com/BugSlayerAryan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/aryan-behera-0009877554567899643"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



