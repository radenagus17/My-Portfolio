const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white dark:bg-gradient-to-b dark:from-slate-400 dark:to-slate-200 dark:text-slate-700">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 dark:border-slate-200">About</p>
        </div>
        <p className="text-xl mt-20 dark:text-slate-500">
          Having basic IT in my studies allows me to explore all things related to the world of Technology, until now I am still motivated programmer to continue learning software to achieve a lifelong career as a developer. Proficient in
          both front-end and back-end development, also eager to improve skills in order to provide efficient solutions in Software Development.
        </p>
        <br />
        <p className="text-xl dark:text-slate-500">Able to work with a solid team and efficient communication to get the best way to solve problems</p>
      </div>
    </div>
  );
};

export default About;
