import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function FormDialog(props) {
  const [stage, setStage] = React.useState("");
  const { palettes, handleNewPalleteNameChange, newPalleteName, handleSave } =
    props;

  const handleClickOpen = () => {
    setStage("form");
  };

  const handleClose = () => {
    setStage("");
  };

  const handleEmojiPicker = () => {
    setStage("emoji");
  };

  const savePalette = (e) => {
    const newPalette = {
      paletteName: newPalleteName,
      emoji: e.native,
    };
    handleSave(newPalette);
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
      <Dialog open={stage === "emoji" ? true : false} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
        <Picker
          data={data}
          onEmojiSelect={savePalette}
          theme="light"
          title="Pick a palette Emoji"
        />
      </Dialog>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        Save Palette
      </Button>
      <Dialog open={stage === "form" ? true : false} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <ValidatorForm onSubmit={handleEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new palette. Make sure it's unique!
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
