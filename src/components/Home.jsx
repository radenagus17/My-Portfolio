import React from "react";
import photo from "./assets/my-image.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 dark:bg-gradient-to-b dark:from-slate-200 dark:via-slate-200 dark:to-slate-400">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-white dark:text-slate-700 transition duration-500">I'm a Fullstack Developer</h2>
            <p className="text-gray-500 dark:text-slate-500 py-4 max-w-md">
              Digital Enthusiasm who has just embarked on an extraordinary and meaningful journey in the world of Programming & Software Engineer; Optimistic, flexible and open-minded person; Loves to travel and share stories.
            </p>
            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer dark:bg-gradient-to-r dark:from-slate-400 dark:to-slate-500"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img src={photo} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full shadow-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
