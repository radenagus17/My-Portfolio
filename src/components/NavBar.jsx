import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import useDarkMode from "../hooks/useDarkMode";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [setTheme, colorTheme] = useDarkMode();

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center px-4 w-full h-20 text-white bg-black dark:bg-white dark:text-slate-700 fixed transition duration-200 shadow-sm z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2">Radenagus17_</h1>
      </div>

      <ul className="hidden md:flex md:items-center">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 dark:text-slate-500 hover:scale-105">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
        <li className="hidden md:flex cursor-pointer px-4">
          <span
            onClick={() => setTheme(colorTheme)}
            className="w-10 h-10 rounded-full dark:bg-gradient-to-r dark:from-slate-400 dark:to-slate-500 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg text-white flex items-center justify-center cursor-pointer hover:animate-[pulse_1.2s_ease-out_infinite]"
          >
            {colorTheme === "light" ? <IoIosMoon size={30} /> : <IoIosSunny size={30} />}
          </span>
        </li>
      </ul>

      <div onClick={() => setNav(!nav)} className={`md:hidden cursor-pointer pr-4 z-10 ${colorTheme === "light" ? "text-slate-400" : "text-gray-500"} `}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center top-0 absolute left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 dark:bg-gradient-to-b dark:from-slate-200 dark:to-slate-400 dark:text-white">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
