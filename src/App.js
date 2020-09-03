import React, { useState, useEffect } from "react";

function App() {
  const [config, setConfig] = useState({
    items: [
      { label: "number", type: "number" },
      { label: "radio", type: "radio" },
      { label: "text", type: "text" },
      { label: "date", type: "date" },
    ],
  });

  var bufferText = {};

  const handleConfigInput = (e) => {
    bufferText = e.target.value;
  };
  const handleApplyClick = () => {
    setConfig(bufferText);
  };

  const renderFromConfig = () =>
    config.items && typeof config.items !== "undefined" && config.length !== 0
      ? config.items.map((item, i) =>
          React.createElement("input", { type: item.type })
        )
      : null;

  return (
    <div className="App" style={{ margin: "20px 50px" }}>
      <input
        type="textArea"
        style={{ width: "200px", height: "200px" }}
        onChange={handleConfigInput}
      />
      <button onClick={handleApplyClick}>APPLY</button>
      {renderFromConfig()}
    </div>
  );
}
export default App;
