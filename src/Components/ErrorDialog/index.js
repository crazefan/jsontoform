import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

const ErrorDialog = ({ isOpen, setClose }) => {
  return (
    <Dialog onClose={setClose} open={isOpen}>
      <DialogTitle>JSON input error</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Looks like JSON you've entered is incorrect. Please check the input.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={setClose} color="primary" autoFocus>
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorDialog;
