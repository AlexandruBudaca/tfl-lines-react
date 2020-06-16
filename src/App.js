import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [modeName, setModeName] = useState("");
  const [err, setErr] = useState(false);

  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => setErr(err));
  }, []);
  return (
    <div className="App">
      <header className="App-header"></header>
      {err && <div>404</div>}
      <div className="select-mode">
        <select
          defaultValue="default"
          onChange={(e) => {
            setModeName(e.target.value);
          }}
        >
          <option value="default" disabled>
            Select mode
          </option>
          {data.map((mode, index) => (
            <option key={index} value={mode.modeName}>
              {mode.modeName}
            </option>
          ))}
        </select>
        <h4>You selected mode: {modeName}</h4>
      </div>
    </div>
  );
}

export default App;
