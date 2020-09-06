import RJSON from "relaxed-json";

// parsing input to JSON including 'relaxed' JSON format for ease-of-use
export const parseJSON = (input) => {
  try {
    const parsedJSON = RJSON.parse(input);
    return [null, parsedJSON];
  } catch (e) {
    return [e, null];
  }
};
