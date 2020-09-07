import React, { useState } from "react";
import { Tab, Tabs } from "@material-ui/core/";
import InputTab from "../../Components/InputTab";
import ResultTab from "../../Components/ResultTab";
import TabPanel from "./TabPanel";

export default function TabContainer() {
  const [value, setValue] = useState(0);
  const [config, setConfig] = useState({});

  const handleConfigChange = (newConfig) => {
    setConfig(newConfig);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        centered
        indicatorColor="primary"
        textColor="primary"
        value={value}
        onChange={handleTabChange}>
        <Tab label="Configuration" />
        <Tab label="Result" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <InputTab onConfigUpdate={handleConfigChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ResultTab config={config} />
      </TabPanel>
    </>
  );
}
