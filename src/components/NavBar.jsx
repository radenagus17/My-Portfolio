import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

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
    <div className="flex justify-between items-center px-4 w-full h-20 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">49second</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105">
            {link}
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer pr-4 z-10 text-gray-500">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center top-0 absolute left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
