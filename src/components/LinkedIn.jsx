import React, { useState, useEffect } from "react";
import linkedinAscii from "linkedinAscii.js?url";

function LinkedIn() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else {
      window.open("https://www.linkedin.com/in/jor-io", "_blank");
    }

    return () => clearInterval(timer);
  }, [countdown]);

  const handleButtonClick = () => {
    setCountdown(3);
  };

  return (
    <>
      <div className="flex flex-col text-[0.5rem] justify-center items-center sm:text-sm text-blue-100 pb-5">
        <pre>{linkedinAscii}</pre>
        <div className="pt-5 text-blue-100"></div>
        <p className="max-w-lg text-center text-lg md:text-xl">
          Redirecting to LinkedIn in{" "}
          {countdown === 0 ? "0" : `${countdown} seconds`}...
        </p>
        <button
          onClick={handleButtonClick}
          className="max-w-lg text-center text-base md:text-lg underline"
        >
          Click Here if you are not redirected automatically.
        </button>
      </div>
    </>
  );
}

export default LinkedIn;
