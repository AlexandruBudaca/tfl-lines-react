import React, { useState, useEffect } from "react";
import SelectMode from "./SelectMode";
import RouteDestination from "./RouteDestination";
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
      <header className="App-header"></header>
      {err && <div>404</div>}

      <SelectMode
        data={data}
        modesName={modesName}
        handleSelectValue={handleSelectValue}
        setModesName={setModesName}
        setOptionLine={setOptionLine}
        setDestination={setDestination}
      />

      {singleModeData.length === 0 ? (
        ""
      ) : (
        <div className="select-mode">
          <select
            defaultValue="default"
            onChange={(e) => {
              handleSelectValue(e, setOptionLine);
            }}
          >
            <option value="default">Select line</option>

            {singleModeData.map((transport) => (
              <option value={transport.name} key={transport.id}>
                {transport.name}
              </option>
            ))}
          </select>
        </div>
      )}
      {destination.length === 0 ? (
        ""
      ) : (
        <RouteDestination destination={destination} err={err} />
      )}
    </div>
  );
}

export default App;
