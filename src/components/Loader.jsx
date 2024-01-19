import React, { useState, useEffect } from "react";
import ascii from "/ascii.js?url";
import { PowerGlitch } from "powerglitch";

function Loader({ onClick, onKeyPress }) {
  const [buttonFlash, setButtonFlash] = useState(false);
  const [clientTime, setClientTime] = useState(new Date());

  useEffect(() => {
    const titleAnimation = () => {
      PowerGlitch.glitch(".text-blue-100, .text-white, .bg-blue-100", {
        timing: {
          duration: 600,
          iterations: 1,
        },
        glitchTimeSpan: {
          start: 0,
          end: 0.2,
        },
        shake: false,
        slice: {
          count: 48,
          velocity: 35,
          maxHeight: 0.13,
          hueRotate: false,
        },
      });
    };

    const handleMouseClick = () => {
      setTimeout(() => {
        titleAnimation();
        setTimeout(() => {
          onClick();
        }, 50); // Delay after animation completion
      }, 1);
    };

    const handleKeyEvent = () => {
      setTimeout(() => {
        titleAnimation();
        setTimeout(() => {
          onKeyPress();
        }, 450); // Delay after animation completion
      }, 1);
    };

    window.addEventListener("keydown", handleKeyEvent);
    window.addEventListener("mousedown", handleMouseClick);

    const buttonFlashInterval = setInterval(() => {
      setButtonFlash((prevFlash) => !prevFlash);
    }, 500);

    const updateTime = () => {
      setClientTime(new Date());
    };

    const updateInterval = setInterval(updateTime, 1000); // Update time every second

    return () => {
      clearInterval(buttonFlashInterval);
      clearInterval(updateInterval);
      window.removeEventListener("keydown", handleKeyEvent);
      window.removeEventListener("mousedown", handleMouseClick);
    };
  }, [onClick, onKeyPress]);

  return (
    <>
      <div className="bg-slate-950 w-full h-svh crt overflow-hidden px-10 py-14 md:px-12 lg:px-16 xl:px-24 ">
        <div className="flex w-full h-full justify-center items-center">
          <div className="title flex flex-col items-center justify-center max-h-screen w-screen overflow-hidden">
            <pre className="text-blue-100 w-auto text-[0.5rem] md:text-sm lg:text-base  font-dos">
              {ascii}
            </pre>
            <h1 className="text-white opacity-85 tracking-wide my-5 text-center text-xs md:text-base font-dos ">
              {`Client time: ${clientTime.toLocaleString()}`}
            </h1>
            <button
              className={`flex items-center justify-center bg-blue-100 w-auto h-4 text-black p-7 text-xs md:text-sm font-dos  ${
                buttonFlash ? "opacity-0" : "opacity-80"
              }`}
            >
              Press any key to continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;
