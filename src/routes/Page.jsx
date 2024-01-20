import React, { useEffect, useState } from "react";
import { useHover } from "@uidotdev/usehooks";
import Home from "../components/Home";
import LinkedIn from "../components/LinkedIn";
import GitHub from "../components/GitHub";
import Projects from "../components/Projects";
import { PowerGlitch } from "powerglitch";

const displayToStyleMapping = {
  Home: "README.txt",
  LinkedIn: "LINKEDIN",
  GitHub: "GITHUB",
  Projects: "projects.txt",
};

function Page() {
  const [homeRef, isHomeHovered] = useHover();
  const [linkedinRef, isLinkedinHovered] = useHover();
  const [githubRef, isGithubHovered] = useHover();
  const [projectsRef, isProjectsHovered] = useHover();
  const [runGlitchAnimation, setRunGlitchAnimation] = useState(true);
  const [currentComponent, setCurrentComponent] = useState("Home");

  useEffect(() => {
    const { startGlitch, stopGlitch } = PowerGlitch.glitch(".glitch", {
      playMode: "manual",
      styles: {
        display: "inline-block",
      },
    });

    if (runGlitchAnimation) {
      startGlitch();
    } else {
      stopGlitch();
    }
  }, [runGlitchAnimation]);

  const renderComponent = () => {
    switch (currentComponent) {
      case "Home":
        return <Home />;
      case "LinkedIn":
        return <LinkedIn />;
      case "GitHub":
        return <GitHub />;
      case "Projects":
        return <Projects />;

      default:
        return <Home />;
    }
  };

  const handleComponentChange = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div className="bg-slate-950 w-screen h-svh crt overflow-hidden px-2 py-2  flex justify-center items-center">
      <div className="border-2 border-l-4 border-r-4 border-blue-100 w-full max-w-5xl h-full grid  grid-rows-10 font-dos tracking-wider">
        <div className="border-blue-100 row-span-3 border-b-2 flex lg:row-span-10 lg:col-span-3 lg:border-none ">
          <div className="border-blue-100 border-r-2 w-3/5 flex flex-col justify-center items-start text-xl text-blue-100 lg:justify-normal lg:py-5 ">
            <div className="w-full">
              <p
                className={`hover:bg-red-800 w-full text-left px-5 cursor-pointer glitch ${
                  currentComponent === "Home" || isHomeHovered
                    ? "bg-red-800"
                    : ""
                }`}
                ref={homeRef}
                onClick={() => handleComponentChange("Home")}
              >
                README.txt
              </p>

              <p
                className={`hover:bg-red-800 w-full text-left px-5 cursor-pointer glitch ${
                  currentComponent === "LinkedIn" || isLinkedinHovered
                    ? "bg-red-800"
                    : ""
                }`}
                ref={linkedinRef}
                onClick={() => handleComponentChange("LinkedIn")}
              >
                LINKEDIN
              </p>
              <p
                className={`hover:bg-red-800 w-full text-left px-5 cursor-pointer glitch ${
                  currentComponent === "GitHub" || isGithubHovered
                    ? "bg-red-800"
                    : ""
                }`}
                ref={githubRef}
                onClick={() => handleComponentChange("GitHub")}
              >
                GITHUB
              </p>
              <p
                className={`hover:bg-red-800 w-full text-left px-5 cursor-pointer glitch ${
                  currentComponent === "Projects" || isProjectsHovered
                    ? "bg-red-800"
                    : ""
                }`}
                ref={projectsRef}
                onClick={() => handleComponentChange("Projects")}
              >
                projects.txt
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center text-xl items-center w-2/5 lg:justify-normal lg:py-5 ">
            <div className="text-center w-full ">
              <p
                className={`text-blue-100 w-full px-5 glitch ${
                  currentComponent === "Home" || isHomeHovered
                    ? "bg-red-800"
                    : ""
                }`}
              >
                --FILE-&gt;
              </p>
              <p
                className={`text-blue-100 w-full px-5 glitch ${
                  currentComponent === "LinkedIn" || isLinkedinHovered
                    ? "bg-red-800"
                    : ""
                }`}
              >
                &gt;LINK&lt;
              </p>
              <p
                className={`text-blue-100 w-full px-5 glitch ${
                  currentComponent === "GitHub" || isGithubHovered
                    ? "bg-red-800"
                    : ""
                }`}
              >
                &gt;LINK&lt;
              </p>
              <p
                className={`text-blue-100 w-full px-5 glitch ${
                  currentComponent === "Projects" || isProjectsHovered
                    ? "bg-red-800"
                    : ""
                }`}
              >
                --FILE-&gt;
              </p>
            </div>
          </div>
        </div>
        <div className="row-span-7 w-full px-5 py-5 lg:py-28 lg:col-span-6 lg:row-span-10 lg:border-l-2 overflow-y-auto">
          <div className="glitch ">{renderComponent()}</div>
        </div>
        <div className="border-t-2 text-blue-100 flex items-center px-5 text-xl lg:col-span-9 lg:row-span-1 lg:border-t-2 ">
          <p className="glitch">
            C:\JORIO\{displayToStyleMapping[currentComponent]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
