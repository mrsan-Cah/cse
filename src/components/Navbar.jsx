import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    navigate("/");
  };

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Courses", path: "/courses" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text flex items-center gap-1 transition-transform hover:scale-105"
        >
          🎓 College Portal
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          {mainLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="relative group transition duration-300 text-lg"
              >
                <span className="group-hover:text-blue-600 transition duration-300">
                  {link.name}
                </span>
                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
          <li>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Login
              </Link>
            )}
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-blue-600 focus:outline-none transition transform hover:scale-110"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-64 px-4 pb-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-3 text-gray-700 font-medium">
          {mainLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="block py-1 text-lg hover:text-blue-600 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="bg-red-500 text-white w-full py-2 rounded-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block bg-blue-500 text-white w-full py-2 rounded-md text-center hover:bg-blue-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}
