import React from "react";
import { FormControlLabel, Radio } from "@material-ui/core";

export const RadioComponent = ({ label }) => {
  return <FormControlLabel control={<Radio />} label={label} />;
};
