import * as React from "react";
import StyledColorPicker from "./styles/ColorPickerstyles";

import { ChromePicker } from "react-color";
import { Button } from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const ColorPickerForm = (props) => {
  const { paletteIsFull, addNewColor, colors } = props;
  const [newColorName, setNewColorName] = React.useState("");
  const [currentColor, setCurrentColor] = React.useState("teal");

  const handleNewColorNameChange = (e) => {
    setNewColorName(e.target.value);
  };
  const handleColorChange = (color) => {
    setCurrentColor(color.hex);
  };
  const handleSubmit = () => {
    const newColor = {
      color: currentColor,
      name: newColorName,
    };
    addNewColor(newColor);
    setNewColorName("");
  };
  React.useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      colors.every(({ color }) => color !== currentColor)
    );
  }, [colors, currentColor]);
  return (
    <StyledColorPicker>
      <ChromePicker
        color={currentColor}
        onChangeComplete={handleColorChange}
        className="picker"
      />
      <ValidatorForm
        onSubmit={handleSubmit}
        className="form-color-name"
        instantValidate={false}
      >
        <TextValidator
          value={newColorName}
          onChange={handleNewColorNameChange}
          placeholder="Color Name"
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "Enter a color name",
            "Color name must be unique",
            "Color already used!",
          ]}
          className="color-name-input"
        />
        <Button
          variant="contained"
          color="primary"
          disabled={paletteIsFull}
          style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
          type="submit"
          className="add-color"
        >
          {paletteIsFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </StyledColorPicker>
  );
};

export default ColorPickerForm;
