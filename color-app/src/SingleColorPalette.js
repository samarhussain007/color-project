import React from "react";
import seedColors from "./seedColors";
import { useParams } from "react-router-dom";
import { palette } from "@mui/system";
import { generatedPallete } from "./ColorHelper";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "./colorBox.css";
import PaletteFooter from "./PaletteFooter";
function SingleColorPalette(props) {
  const { id, colorId } = useParams();
  const [format, setFormat] = useState("hex");
  console.log(props.palette);
  const findPallete = (id) => seedColors.find((palette) => palette.id === id);
  const palette = generatedPallete(findPallete(id));
  function changeFormat(evt) {
    setFormat(evt);
  }

  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };
  const shades = gatherShades(palette, colorId);
  console.log(shades);

  const colorBoxes = shades.map((el) => (
    <ColorBox
      background={el[format]}
      name={el.name}
      key={el.name}
      showingFullPalette={false}
    />
  ));

  return (
    <div className="SingleColorPalette Pallete">
      <Navbar handleChange={changeFormat} showingAllColors={false} />
      <h1>SINGLE PALETTE COLOR</h1>
      <div className="Pallete-colors">
        {colorBoxes}
        <div className="go-back ColorBox">
          <Link to={`/palette/${id} `} className="back-button">
            GO BACK
          </Link>
        </div>
      </div>
      <PaletteFooter paletteName={palette.palleteName} emoji={palette.emoji} />
    </div>
  );
}

export default SingleColorPalette;
