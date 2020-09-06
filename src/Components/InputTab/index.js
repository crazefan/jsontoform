import React, { useState } from "react";
import { TextField, Button, Box } from "@material-ui/core";
import { parseJSON } from "../../utils/parseJson";
import ResultTab from "../ResultTab";

const InputTab = () => {
  const [config, setConfig] = useState({});

  //intermediate buffer for storing input state
  const [buffer, setBuffer] = useState("");

  const handleInputChange = (e) => {
    setBuffer(e.target.value);
  };

  const handleApplyClick = () => {
    setConfig({});

    //async
    setTimeout(() => {
      if (buffer.length > 0) {
        const [error, parsedJSON] = parseJSON(buffer);

        if (!error && parsedJSON) {
          setConfig(parsedJSON);
        }
      }
    }, 0);
  };

  return (
    <Box mx={2} my={2}>
      <TextField
        multiline
        rows={12}
        onChange={handleInputChange}
        label="Input"
        variant="outlined"
      />
      <Button onClick={handleApplyClick} mx={2}>
        Apply
      </Button>
      <ResultTab config={config} />
    </Box>
  );
};

export default InputTab;
