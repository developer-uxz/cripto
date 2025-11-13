import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // 🔹 Menu Items
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Pages", subMenu: [
        { name: "Support Page", path: "/support" },
      ]
    },
    { name: "Support", path: "/support" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activePage = location.pathname;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? props.mode === "dark"
              ? "bg-[#172969]"
              : "bg-white shadow-sm"
            : props.mode === "dark"
            ? "bg-transparent text-white"
            : "bg-transparent text-black"
        }`}
      >
        <div className="px-6">
          <div className="flex justify-between items-center h-20">
            {/* 🔹 Logo */}
            <img
              src={props.mode === "dark" 
  ? `${process.env.PUBLIC_URL}/logo-light.svg` 
  : `${process.env.PUBLIC_URL}/logo-dark.svg`}

              alt="Site Logo"
              className="h-12 w-auto transition duration-300"
            />
            {/* 🔹 Navigation Menu */}
            <div
              className={`hidden ml-24 md:flex space-x-12 text-lg relative transition-colors duration-300 ${
                props.mode === "dark" ? "text-gray-300" : "text-[#8A7381]"
              }`}
            >
              {menuItems.map((item) =>
                item.subMenu ? (
                  <div key={item.name} className="relative group">
                    <button
                      className={`font-semibold flex items-center transition-colors duration-300 ${
                        props.mode === "dark"
                          ? "hover:text-white"
                          : "hover:text-indigo-500"
                      }`}
                    >
                      {item.name}
                      <svg
                        className="w-4 h-4 ml-1 mt-1 transition-transform duration-200 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* 🔹 Dropdown */}
                    <div
                      className={`absolute left-0 hidden group-hover:block shadow-lg rounded-lg mt-2 w-52 text-base ${
                        props.mode === "dark"
                          ? "bg-gray-800 text-white"
                          : "bg-white text-[#080321]"
                      }`}
                    >
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className={`block px-4 py-2 ${
                            props.mode === "dark"
                              ? "hover:bg-gray-700"
                              : "hover:bg-indigo-100"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`font-semibold transition-colors duration-300 ${
                      activePage === item.path
                        ? props.mode === "dark"
                          ? "text-white"
                          : "text-blue-500"
                        : props.mode === "dark"
                        ? "hover:text-white"
                        : "hover:text-indigo-500"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>

            {/* 🔹 Right Side Buttons */}
            <div className="flex items-center space-x-5">
              {/* Search Icon */}
              <button
                onClick={() => setShowSearch(true)}
                className={`rounded-full p-2 cursor-pointer transition-colors duration-300 ${
                  props.mode === "dark"
                    ? "text-white "
                    : "text-gray-700 "
                }  
                ${
                  props.mode === "dark"
                    ? "bg-black"
                    : "bg-white"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                  />
                </svg>
              </button>

              {/* 🔘 Dark/Light Toggle */}
              <div
                onClick={props.toggleButton}
                className={`relative p-1 w-20 h-10 flex items-center rounded-full cursor-pointer transition-all duration-500 ${
                  props.mode === "dark" ? "bg-[#101643]" : "bg-[#f5f8ff]"
                }`}
              >
                <div
                  className={`absolute w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all duration-500 ${
                    props.mode === "dark"
                      ? "translate-x-8 bg-blue-700"
                      : "translate-x-1 bg-blue-500"
                  }`}
                >
                  {props.mode === "dark" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12.79A9 9 0 0112.79 3a7 7 0 100 14A9 9 0 0121 12.79z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1m0 16v1m8.66-11.66l-.71.71M4.05 19.95l-.71.71m16.32-4.24h1M3 12H2m15.66 8.66l-.71-.71M4.05 4.05l-.71-.71M12 8a4 4 0 100 8 4 4 0 000-8z"
                      />
                    </svg>
                  )}
                </div>
              </div>

              {/* Sign In Button */}
              <Link
                to="/signin"
                className={`text-lg border px-6 py-1.5 rounded-full transition cursor-pointer ${
                  props.mode === "dark"
                    ? "text-white border border-white hover:bg-white hover:text-blue-600"
                    : "text-gray-800 border border-black hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
                }`}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 🔍 Search Overlay */}
      {showSearch && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-start justify-center pt-20 z-[9999] transition-opacity duration-300 opacity-100">
          <div className="relative w-[40%] max-w-1xl bg-white rounded-xl px-5 py-4 flex items-center border border-gray-300 shadow-lg">
            <svg
              className="w-5 h-5 text-black mr-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search Entire Site | Products, Docs, Pages ..."
              className="w-full border-none outline-none text-gray-700 placeholder-gray-400 text-lg bg-white"
              autoFocus
            />
            <button
              onClick={() => setShowSearch(false)}
              className="absolute -top-3 -right-3 bg-white border border-gray-500 text-gray-500 hover:text-black rounded-full w-8 h-8 flex items-center justify-center shadow-sm cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
