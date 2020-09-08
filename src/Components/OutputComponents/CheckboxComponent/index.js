import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";

const CheckboxComponent = ({ label }) => (
  <FormControlLabel control={<Checkbox />} label={label} />
);

export default CheckboxComponent;
