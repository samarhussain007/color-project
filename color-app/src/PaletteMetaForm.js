import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const { palettes, handleNewPalleteNameChange, newPalleteName, handleSave } =
    props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }, [palettes]);

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <ValidatorForm onSubmit={() => handleSave(newPalleteName)}>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextValidator
              label="Palette Name"
              value={newPalleteName}
              fullWidth
              margin="normal"
              onChange={handleNewPalleteNameChange}
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={["Enter Palette Name", "Name already used"]}
            />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Save Palette</Button>
            </DialogActions>
          </DialogContent>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}
