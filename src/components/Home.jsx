import React from "react";
import welcomeAscii from "./welcomeAscii";

function Home() {
  return (
    <>
      <div className="flex flex-col text-[0.6rem] justify-center items-center sm:text-xl text-blue-100  pb-5 ">
        <pre>{welcomeAscii}</pre>
        <div className=" pt-5 text-blue-100"></div>
        <p className="max-w-lg text-center text-base md:text-xl">
          Hi, I'm Jorge, a Software Engineering student at the University of
          Guelph. I love to work on web development and have been focusing my
          skills on becoming a full-stack developer.
        </p>
        <p className="max-w-lg text-center text-base pt-5 sm:pt-20 ">
          -- Get in touch --
        </p>
        <p className="max-w-lg text-center text-base md:text-xl">
          JorgeJacobRubio@gmail.com
          <br />
          or via links
        </p>
      </div>
    </>
  );
}

export default Home;
