import React, { useState } from "react";
import { Tab, Tabs } from "@material-ui/core/";
import InputTab from "../InputTab";
import ResultTab from "../ResultTab";
import TabPanel from "../TabPanel";
import { isValidJson, parseJson } from "../../utils";

export default function TabContainer({ onInvalidJsonError }) {
  const [config, setConfig] = useState({});
  const [currentTab, setCurrentTab] = useState(0);
  const [error, parsedJson] = parseJson(config);

  const handleConfigChange = (newConfig) => {
    if (isValidJson(newConfig)) {
      setConfig(newConfig);
      setCurrentTab(1);
    } else {
      onInvalidJsonError();
    }
  };

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <Tabs
        centered
        indicatorColor="primary"
        textColor="primary"
        value={currentTab}
        onChange={handleTabChange}
      >
        <Tab label="Configuration" />
        <Tab label="Result" />
      </Tabs>
      {currentTab === 0 && (
        <TabPanel>
          <InputTab config={config} onConfigUpdate={handleConfigChange} />
        </TabPanel>
      )}
      {currentTab === 1 && (
        <TabPanel>
          <ResultTab config={!error && parsedJson} />
        </TabPanel>
      )}
    </>
  );
}
