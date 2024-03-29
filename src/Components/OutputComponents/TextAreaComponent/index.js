import React from "react";
import { TextField } from "@material-ui/core";

const TextAreaComponent = (props) => (
  <TextField multiline rows={4} variant="outlined" {...props} />
);

export default TextAreaComponent;
