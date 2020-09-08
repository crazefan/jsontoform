import React from "react";
import { FormControlLabel, Radio } from "@material-ui/core";

const RadioComponent = ({ label }) => {
  return <FormControlLabel control={<Radio />} label={label} />;
};

export default RadioComponent;
