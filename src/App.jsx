import React, { useState } from "react";
import Loader from "./components/Loader";
import Page from "./routes/Page";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showPage, setShowPage] = useState(false);

  const handleLoaderClick = () => {
    setShowLoader(false);
    setShowPage(true);
  };

  const handleKeyPress = () => {
    setShowLoader(false);
    setShowPage(true);
  };

  return (
    <>
      {showLoader ? (
        <Loader onClick={handleLoaderClick} onKeyPress={handleKeyPress} />
      ) : showPage ? (
        <Page />
      ) : null}
    </>
  );
}

export default App;
