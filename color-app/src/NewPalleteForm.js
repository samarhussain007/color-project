import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { arrayMove } from "react-sortable-hoc";
import DraggableColorList from "./DraggableColorList";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import Main from "./styles/MainStyles";
import DrawerHeader from "./styles/DrawerStyles";
const drawerWidth = 400;

export default function PersistentDrawerLeft(props) {
  const { maxColors = 20 } = props;
  const [open, setOpen] = React.useState(false);

  const [colors, setColors] = React.useState(props.palettes[0].colors);
  const paletteIsFull = colors.length >= maxColors;

  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors((colors) => arrayMove(colors, oldIndex, newIndex));
  };

  const handleSave = ({ paletteName, emoji }) => {
    const newPallete = {
      paletteName: paletteName,
      id: paletteName.toLowerCase().replace(/ /g, "-"),
      emoji: emoji,
      colors: colors,
    };
    // console.log(newPallete);
    props.savePallete(newPallete);
    navigate("/");
  };

  const handleDelete = (colorName) => {
    setColors(colors.filter((color) => color.name !== colorName));
  };

  const clearColors = () => {
    setColors([]);
  };

  const addRandomColor = () => {
    const allColors = props.palettes.map((p) => p.colors).flat();

    let rand;
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      isDuplicateColor = colors.some(
        (color) => color.name === randomColor.name
      );
    }
    setColors([...colors, randomColor]);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <PaletteFormNav
        open={open}
        palettes={props.palettes}
        handleSave={handleSave}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },

          "& .container": {
            width: "90%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
          "& .buttons": {
            width: "100%",
            display: "flex",
            justifyContent: "center",
          },
          "& .button": {
            width: "50%",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className="container">
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className="buttons">
            <Button
              variant="contained"
              color="secondary"
              onClick={clearColors}
              className="button"
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={addRandomColor}
              disabled={paletteIsFull}
              className="button"
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            paletteIsFull={paletteIsFull}
            addNewColor={addNewColor}
            colors={colors}
          />
        </div>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <DraggableColorList
          colors={colors}
          deleteColor={handleDelete}
          axis="xy"
          onSortEnd={onSortEnd}
          distance={20}
        />
      </Main>
    </Box>
  );
}
