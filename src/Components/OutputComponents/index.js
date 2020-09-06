import { TextField } from "@material-ui/core";
import {
  Numberfield,
  ButtonComponent,
  TextArea,
  CheckboxComponent,
  DateComponent,
  RadioComponent,
} from "./componentsBuild";

//components map for dynamic rendering
export const components = {
  number: {
    component: Numberfield,
  },
  text: {
    component: TextField,
  },
  textarea: {
    component: TextArea,
  },
  checkbox: {
    component: CheckboxComponent,
  },
  date: {
    component: DateComponent,
  },
  radio: {
    component: RadioComponent,
  },
  button: {
    component: ButtonComponent,
  },
};
