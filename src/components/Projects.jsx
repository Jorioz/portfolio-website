import React from "react";
import albumleAscii from "./albumleAscii.js";

function Projects() {
  const handlePlayClick = () => {
    window.open("https://albumle.app", "_blank");
  };

  return (
    <>
      <div className="flex flex-col text-[0.6rem] justify-center items-center sm:text-xl text-blue-100  pb-5 ">
        <pre>{albumleAscii}</pre>
        <div className="pt-5 text-blue-100"></div>
        <p className="max-w-lg text-center text-base md:text-xl">
          <span className="text-yellow-200">JavaScript </span>
          <span className="text-green-200">Node.JS </span>
          <span className="text-slate-200">Express </span>
          <span className="text-orange-200">Firebase</span>
        </p>
        <p className="max-w-lg text-center text-base md:text-xl py-5">
          Guess the pixelated album cover in 6 guesses or less! Inspired by
          Wordle, check back for a new album daily.
        </p>

        <button
          className={`flex items-center justify-center bg-blue-100 opacity-85 hover:bg-blue-200 w-auto h-4 text-black p-7 text-xs md:text-sm font-dos`}
          onClick={handlePlayClick}
        >
          Play Here!
        </button>
      </div>
    </>
  );
}

export default Projects;
