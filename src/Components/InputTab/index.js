import React, { useState } from "react";
import { TextField, Button, Box } from "@material-ui/core";
import { isObjectEmpty } from "../../utils";

const InputTab = ({ config, onConfigUpdate }) => {
  //intermediate buffer for storing input state
  const [buffer, setBuffer] = useState(config);

  const handleInputChange = (e) => {
    setBuffer(e.target.value);
  };

  const handleApplyClick = () => {
    onConfigUpdate(buffer);
  };

  return (
    <>
      <Box
        my={4}
        mx="auto"
        width="500px"
        display="flex"
        justifyContent="center"
      >
        <TextField
          rows={12}
          fullWidth
          multiline
          label="Input"
          variant="outlined"
          onChange={handleInputChange}
          value={isObjectEmpty(buffer) ? "" : buffer}
        />
      </Box>
      <Box display="flex" justifyContent="center" my={3}>
        <Button onClick={handleApplyClick} variant="contained">
          Apply
        </Button>
      </Box>
    </>
  );
};

export default InputTab;
