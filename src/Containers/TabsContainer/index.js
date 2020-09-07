import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import InputTab from "../../Components/InputTab";
import ResultTab from "../../Components/ResultTab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function TabContainer() {
  const [value, setValue] = React.useState(0);
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
