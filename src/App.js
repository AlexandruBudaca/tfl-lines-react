import React, { useState, useEffect } from "react";
import SelectMode from "./SelectMode";
import SelectLine from "./SelectLine";
import RouteDestination from "./RouteDestination";
import ShowModeAndOption from "./ShowModeAndOption";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [modesName, setModesName] = useState("");
  const [err, setErr] = useState(false);
  const [singleModeData, setSingleData] = useState([]);
  const [optionLine, setOptionLine] = useState("");
  const [destination, setDestination] = useState([]);
  const fetchData = (url, set) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => set(data))
      .catch((err) => setErr(err));
  };

  useEffect(() => {
    if (optionLine === "") {
    } else {
      fetchData(
        "https://api.tfl.gov.uk/Line/" + optionLine + "/Route",
        setDestination
      );
    }
    fetchData("https://api.tfl.gov.uk/Line/Meta/Modes", setData);
    if (modesName === "") {
    } else {
      fetchData("https://api.tfl.gov.uk/Line/Mode/" + modesName, setSingleData);
    }
  }, [modesName, optionLine]);

  const handleSelectValue = (e, set) => {
    set(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header"> Transport for London</header>
      <div className="content">
        {err && <div>404</div>}

        <SelectMode
          data={data}
          modesName={modesName}
          handleSelectValue={handleSelectValue}
          setModesName={setModesName}
          setOptionLine={setOptionLine}
          setDestination={setDestination}
        />
        <br />
        <SelectLine
          singleModeData={singleModeData}
          handleSelectValue={handleSelectValue}
          setOptionLine={setOptionLine}
        />

        <br />
        <ShowModeAndOption optionLine={optionLine} modesName={modesName} />

        <br />

        <div>
          {destination.length === 0 ? (
            ""
          ) : (
            <RouteDestination destination={destination} err={err} />
          )}
        </div>
      </div>
      <footer className="attribution">
        <a
          href="https://codeyourfuture.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodeYourFuture
        </a>
        . Coded by Alexandru Budaca.
      </footer>
    </div>
  );
}

export default App;
