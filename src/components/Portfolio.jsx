import React from "react";
import todo from "./assets/todoApp.png";
import resto from "./assets/restoApp.png";
import netflix from "./assets/netflixClone.png";
import portfolio from "./assets/portfolio.png";
import gilgamass from "./assets/gilgamass.png";
import newsportal from "./assets/newsportal.png";
import megafit from "./assets/megafit.png";
import jastip from "./assets/jastip.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: todo,
      demo: "https://fir-app-todo.web.app",
      code: "https://github.com/radenagus17/firebase-todo-app",
    },
    {
      id: 2,
      src: resto,
      demo: "https://e-resto-app.netlify.app",
      code: "https://github.com/radenagus17/e-resto-app",
    },
    {
      id: 3,
      src: megafit,
      demo: "https://new-megafit-client.netlify.app",
      code: "https://github.com/radenagus17/New-Megafit-Client",
    },
    {
      id: 4,
      src: portfolio,
      code: "https://github.com/radenagus17/My-Portfolio",
    },
    {
      id: 5,
      src: netflix,
      demo: "https://netflix-clone-byagus.web.app",
      code: "https://github.com/radenagus17/netflix-clone",
    },
    {
      id: 6,
      src: gilgamass,
      demo: "https://gilga-mass.web.app",
      code: "https://github.com/radenagus17/GilgaMass-Client/tree/dev",
    },
    {
      id: 7,
      src: newsportal,
      demo: "https://news-portal101.web.app",
      code: "https://github.com/radenagus17/news-portal",
    },
    {
      id: 8,
      src: jastip,
      demo: "https://jastipque-app.web.app",
      code: "https://github.com/radenagus17/JastipQue-Client",
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full dark:bg-gradient-to-b dark:from-slate-200 dark:to-slate-400 text-white dark:text-slate-700 md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 dark:border-slate-100 transition duration-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-20 md:mb-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md hover:scale-105 duration-200" />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={code} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
