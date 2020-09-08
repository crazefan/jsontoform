import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

const ErrorDialog = ({ onClose, dialogConfig, ...props }) => (
  <Dialog onClose={onClose} {...props}>
    <DialogTitle>{dialogConfig.title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{dialogConfig.text}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary" autoFocus>
        Okay
      </Button>
    </DialogActions>
  </Dialog>
);

export default ErrorDialog;
