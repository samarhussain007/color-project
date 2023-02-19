import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { ChromePicker } from "react-color";
import { Button } from "@mui/material";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useNavigate } from "react-router-dom";
import { arrayMove } from "react-sortable-hoc";
import DraggableColorList from "./DraggableColorList";
import PaletteFormNav from "./PaletteFormNav";

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
    <div>
      <ChromePicker color={currentColor} onChangeComplete={handleColorChange} />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          value={newColorName}
          onChange={handleNewColorNameChange}
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "Enter a color name",
            "Color name must be unique",
            "Color already used!",
          ]}
        />
        <Button
          variant="contained"
          color="primary"
          disabled={paletteIsFull}
          style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
          type="submit"
        >
          {paletteIsFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default ColorPickerForm;
