import React, { useState } from "react";
import { TextField, Button, Box, Container } from "@material-ui/core";
import { parseJSON } from "../../utils/parseJson";
import ErrorDialog from "../ErrorDialog";

const handyString = {
  items: [
    { type: "number", label: "number" },
    { type: "text", label: "text" },
    { type: "textarea", label: "textArea" },
    { type: "checkbox", label: "do you like pizza" },
    { type: "date", label: "your birthday date" },
    { type: "radio", label: "useless radio" },
    { type: "button", label: "DISCARD" },
  ],
};

const InputTab = ({ onConfigUpdate }) => {
  //handling error message status
  const [dialogOpen, setDialogOpen] = useState(false);

  //intermediate buffer for storing input state
  const [buffer, setBuffer] = useState("");

  const handleInputChange = (e) => {
    setBuffer(e.target.value);
  };

  const handleApplyClick = () => {
    onConfigUpdate({});

    //async
    setTimeout(() => {
      if (buffer.length > 0) {
        const [error, parsedJSON] = parseJSON(buffer);

        if (!error && parsedJSON) {
          onConfigUpdate(parsedJSON);
        } else {
          setDialogOpen(true);
        }
      }
    }, 0);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Container>
      <Box
        width="500px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mx="auto"
        my={4}>
        <TextField
          multiline
          rows={12}
          onChange={handleInputChange}
          label="Input"
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
        my={3}>
        <Button onClick={handleApplyClick} variant="contained">
          Apply
        </Button>
      </Box>
      <ErrorDialog isOpen={dialogOpen} setClose={handleDialogClose} />
    </Container>
  );
};

export default InputTab;
