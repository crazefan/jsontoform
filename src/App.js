import React, { useState, useRef } from "react";

function App() {
  const inputPlaceholder = {
    items: [],
  };
  const [config, setConfig] = useState({});

  const inputForm = useRef(null);

  const handleApplyClick = () => {
    const form = inputForm.current;
    setConfig(form["configInput"].value);
  };

  const renderFromConfig = () =>
    config.items && typeof config.items !== "undefined" && config.length !== 0
      ? config.items.map((item, i) =>
          React.createElement("input", { type: item.type })
        )
      : null;

  return (
    <div className="App" style={{ margin: "20px 50px" }}>
      <form ref={inputForm}>
        <input
          type="textArea"
          name="configInput"
          style={{ width: "200px", height: "200px" }}
          placeholder={JSON.stringify(inputPlaceholder)}
        />
      </form>
      <button onClick={handleApplyClick}>APPLY</button>
      {renderFromConfig()}
    </div>
  );
}
export default App;
