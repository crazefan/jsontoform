import React from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";

export const Numberfield = (props) => {
  return <TextField type="number" {...props} />;
};

export const TextArea = (props) => {
  return <TextField multiline rows={4} variant="outlined" {...props} />;
};

export const CheckboxComponent = (props) => {
  const { label } = props;
  return <FormControlLabel control={<Checkbox />} label={label} {...props} />;
};

export const DateComponent = (props) => {
  const { label } = props;
  return (
    <TextField
      label={label}
      type="date"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export const RadioComponent = (props) => {
  const { label } = props;
  return <FormControlLabel control={<Radio />} label={label} />;
};

export const ButtonComponent = (props) => {
  const { label } = props;
  return <Button variant="contained">{label}</Button>;
};
