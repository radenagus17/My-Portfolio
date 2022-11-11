import React from "react";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://ik.imagekit.io/jastipQue/portfolio/tr:w-auto,f-avif/todoApp_-RdTw1jDK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660482310313",
      demo: "https://fir-app-todo.web.app",
      code: "https://github.com/radenagus17/firebase-todo-app",
    },
    {
      id: 2,
      src: "https://ik.imagekit.io/jastipQue/portfolio/tr:w-auto,f-avif/restoApp_jBjyTQRX4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660482312259",
      demo: "https://e-resto-app.netlify.app",
      code: "https://github.com/radenagus17/e-resto-app",
    },
    {
      id: 3,
      src: "https://ik.imagekit.io/jastipQue/portfolio/tr:w-auto,f-avif/megafit_VFdLTOP27.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660482312938",
      demo: "https://new-megafit-client.netlify.app",
      code: "https://github.com/radenagus17/New-Megafit-Client",
    },
    {
      id: 4,
      src: "https://ik.imagekit.io/jastipQue/portfolio/tr:w-auto,f-avif/portfolio_C5uGZZajm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660482307057",
      code: "https://github.com/radenagus17/My-Portfolio",
    },
    {
      id: 5,
      src: "https://ik.imagekit.io/jastipQue/portfolio/tr:w-auto,f-avif/netflixClone_eMAqxxO_h.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660482313567",
      demo: "https://netflix-clone-byagus.web.app",
      code: "https://github.com/radenagus17/netflix-clone",
    },
    {
      id: 6,
      src: "https://ik.imagekit.io/jastipQue/portfolio/tr:w-auto,f-avif/lp-yoga_rCv8qD8Ja.png?ik-sdk-version=javascript-1.4.3&updatedAt=1662202854674",
      demo: "https://start-with-yoga.netlify.app/",
      code: "https://github.com/radenagus17/lp-yoga",
    },
    {
      id: 7,
      src: "https://ik.imagekit.io/jastipQue/portfolio/tr:w-auto,f-avif/gilgamass_wP5mT0sp8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660482303952",
      demo: "https://gilga-mass.web.app",
      code: "https://github.com/radenagus17/GilgaMass-Client/tree/dev",
    },
    {
      id: 8,
      src: "https://ik.imagekit.io/jastipQue/portfolio/tr:w-auto,f-avif/newsportal_PDgKEcTtO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660482310023",
      demo: "https://news-portal101.web.app",
      code: "https://github.com/radenagus17/news-portal",
    },
    {
      id: 9,
      src: "https://ik.imagekit.io/jastipQue/portfolio/tr:w-auto,f-avif/jastip_imKkKDzTZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660482310152",
      demo: "https://jastipque-app.web.app",
      code: "https://github.com/radenagus17/JastipQue-Client",
    },
    {
      id: 10,
      src: "https://ik.imagekit.io/jastipQue/portfolio/tr:w-auto,f-avif/twitch-clone_XE31plSrK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667465915498",
      demo: "https://twitch-7-clone.vercel.app/",
      code: "https://github.com/radenagus17/twitch-clone",
    },
    {
      id: 11,
      src: "https://ik.imagekit.io/jastipQue/portfolio/tr:w-auto,f-avif/next-commerce_v7VAENNyb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667466170543",
      demo: "https://sanber-next-commerce-kifphmn1x-radenagus17.vercel.app",
      code: null,
    },
    {
      id: 12,
      src: "https://ik.imagekit.io/jastipQue/portfolio/tr:w-auto,f-avif/cafe-bistro_roSlwqPhK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668151936921",
      demo: "https://cafe-resto117.vercel.app",
      code: "https://github.com/radenagus17/lp-cafe-resto",
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
