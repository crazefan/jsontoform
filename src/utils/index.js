import RJSON, { parse } from "relaxed-json";

import {
  ButtonComponent,
  CheckboxComponent,
  DateComponent,
  Numberfield,
  RadioComponent,
  TextArea,
} from "../Components/OutputComponents/componentsBuild";

import { TextField } from "@material-ui/core";

export const components = {
  text: TextField,
  textarea: TextArea,
  number: Numberfield,
  checkbox: CheckboxComponent,
  date: DateComponent,
  radio: RadioComponent,
  button: ButtonComponent,
};

export const isObjectEmpty = (object) =>
  Object.keys(object).length === 0 && object.constructor === Object;

// parsing input to JSON including 'relaxed' JSON format for ease-of-use
export const parseJson = (input) => {
  try {
    const parsedJSON = RJSON.parse(input);

    if (
      JSON.stringify(parsedJSON) === `"${input}"` ||
      typeof parsedJSON === "number"
    ) {
      return [new Error("Invalid JSON"), null];
    }

    return [null, parsedJSON];
  } catch (e) {
    return [e, null];
  }
};

export const isValidJson = (json) => {
  const [error, parsedJSON] = parseJson(json);

  return !error && parsedJSON;
};
