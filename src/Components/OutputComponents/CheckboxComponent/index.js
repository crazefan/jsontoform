import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";

export const CheckboxComponent = ({ label }) => (
  <FormControlLabel control={<Checkbox />} label={label} />
);
