import RJSON from "relaxed-json";

import TextAreaComponent from "../Components/OutputComponents/TextAreaComponent";
import NumberfieldComponent from "../Components/OutputComponents/NumberfieldComponent";
import CheckboxComponent from "../Components/OutputComponents/CheckboxComponent";
import DateComponent from "../Components/OutputComponents/DateComponent";
import RadioComponent from "../Components/OutputComponents/RadioComponent";
import ButtonComponent from "../Components/OutputComponents/ButtonComponent";

import { TextField } from "@material-ui/core";

export const components = {
  text: TextField,
  textarea: TextAreaComponent,
  number: NumberfieldComponent,
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

    //making sure parsed json isn't a single line string or a number
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

export const isValidArray = (config) =>
  config &&
  config.items &&
  Array.isArray(config.items) &&
  config.items.length > 0 &&
  true;
