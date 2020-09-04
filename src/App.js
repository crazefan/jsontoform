import React, { useState } from "react";
import RJSON from "relaxed-json";

function App() {
  const handyString = {
    items: [
      { label: "date", type: "date" },
      { label: "number", type: "number" },
      { label: "text", type: "textArea" },
      { label: "textArea", type: "text" },
      { label: "radio", type: "radio" },
      { label: "checkbox", type: "checkbox" },
    ],
  };

  const [config, setConfig] = useState({});
  const [buffer, setBuffer] = useState("");

  const handleApplyClick = () => {
    if (buffer.length > 0) {
      const temp = RJSON.parse(buffer);
      setConfig(temp);
    } else {
      return null;
    }
  };

  const handleChange = (e) => {
    setBuffer(e.target.value);
  };

  const renderFromConfig = () =>
    config.items &&
    typeof config.items !== "undefined" &&
    config.items.length !== 0
      ? config.items.map((item, i) => (
          <div>
            <label>{item.label}</label>
            {React.createElement("input", { type: item.type })}
          </div>
        ))
      : null;

  return (
    <div className="App" style={{ margin: "20px 50px" }}>
      <textarea
        style={{ width: "200px", height: "200px" }}
        placeholder={"config goes here"}
        onChange={handleChange}
      />
      <button onClick={handleApplyClick}>APPLY</button>
      <div>{renderFromConfig()}</div>
    </div>
  );
}
export default App;
