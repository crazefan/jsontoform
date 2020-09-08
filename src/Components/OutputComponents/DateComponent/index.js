import React from "react";
import { TextField } from "@material-ui/core";

const DateComponent = ({ label }) => (
  <TextField
    label={label}
    type="date"
    InputLabelProps={{
      shrink: true,
    }}
  />
);

export default DateComponent;
