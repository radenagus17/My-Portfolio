import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white dark:bg-gradient-to-b dark:from-slate-200 dark:to-slate-400 dark:text-slate-700">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 dark:border-slate-200">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/7c5ec5e9-230f-43be-9962-30c6b80948d9" method="POST" className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none dark:text-slate-700" />
            <input type="email" name="email" placeholder="Enter your email" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none dark:text-slate-700" />
            <textarea name="message" rows="10" placeholder="Enter your message" className="p-2 bg-transparent border-2 text-white rounded-md focus:outline-none dark:text-slate-700"></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 dark:bg-gradient-to-b dark:from-slate-400  dark:to-slate-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
