import React, { useState } from "react";

function App() {
  const inputPlaceholder = {
    items: [],
  };
  const [config, setConfig] = useState({});

  var bufferText = {};

  const handleConfigInput = (e) => {
    bufferText = JSON.parse(e.target.value);
  };
  const handleApplyClick = () => {
    setConfig(bufferText);
    console.log(config);
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
        placeholder={JSON.stringify(inputPlaceholder)}
        onChange={handleConfigInput}
        wrap="hard"
      />
      <button onClick={handleApplyClick}>APPLY</button>
      {renderFromConfig()}
    </div>
  );
}
export default App;
