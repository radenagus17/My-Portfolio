import React from "react";
import html from "./assets/html.png";
import css from "./assets/css.png";
import Javascript from "./assets/Javascript.png";
import reactImage from "./assets/React.webp";
import nodejs from "./assets/nodejs.png";
import tailwinds from "./assets/tailwind.png";
import nextjs from "./assets/nextjs-color.png";
import github from "./assets/github.png";
import graphql from "./assets/GraphQL.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwinds,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nodejs,
      title: "NodeJs",
      style: "shadow-emerald-500",
    },
    {
      id: 7,
      src: nextjs,
      title: "NextJs",
      style: "shadow-[#5CDEED]",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-500",
    },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen dark:bg-gradient-to-b dark:from-slate-400 dark:to-slate-200">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full w-full text-white dark:text-slate-700">
        <div>
          <p className="text-4xl pb-1 font-bold border-b-4 border-gray-500 dark:border-slate-300 inline transition duration-500">Experience</p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg dark:bg-slate-200 ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
