import React from "react";
import { TextField } from "@material-ui/core";

export const DateComponent = ({ label }) => (
  <TextField
    label={label}
    type="date"
    InputLabelProps={{
      shrink: true,
    }}
  />
);
