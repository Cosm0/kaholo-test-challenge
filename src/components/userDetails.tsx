import * as React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default props => {
  const { open, setOpen, item } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Details</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" cy-selector="user-description">
          <b>Email:</b> {item.email} <br />
          <b>Username:</b> {item.login.username} <br />
          <b>City:</b> {item.location.city} <br />
          <b>Street:</b> {item.location.street.name} <br />
          <b>Number:</b> {item.location.street.number} <br />
          <b>State:</b> {item.location.state} <br />
          <b>Postcode:</b> {item.location.postcode} <br />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
