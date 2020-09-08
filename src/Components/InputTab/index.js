import React, { useState } from "react";
import { TextField, Button, Box, Container } from "@material-ui/core";
import { isObjectEmpty } from "../../utils";

const handyString = {
  items: [
    { type: "number", label: "number" },
    { type: "button", label: "DISCARD" },
    { type: "button", label: "DISCARD" },
    { type: "text", label: "text" },
    { type: "textarea", label: "textArea" },
    { type: "checkbox", label: "do you like pizza" },
    { type: "date", label: "your birthday date" },
    { type: "radio", label: "useless radio" },
    { type: "button", label: "DISCARD" },
  ],
};

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
    <Container>
      <Box
        width="500px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mx="auto"
        my={4}
      >
        <TextField
          multiline
          rows={12}
          onChange={handleInputChange}
          label="Input"
          value={isObjectEmpty(buffer) ? "" : buffer}
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box
        minwidth="500px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mx="auto"
        my={3}
      >
        <Button onClick={handleApplyClick} variant="contained">
          Apply
        </Button>
      </Box>
    </Container>
  );
};

export default InputTab;
