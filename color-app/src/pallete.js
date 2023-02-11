import React, { Component, useState } from "react";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Pallete.css";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import seedColors from "./seedColors";
import { generatedPallete } from "./ColorHelper";
import PaletteFooter from "./PaletteFooter";

function Pallete(props) {
  const { id } = useParams();
  const findPallete = (id) => seedColors.find((palette) => palette.id === id);
  const palette = generatedPallete(findPallete(id));

  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const { colors } = palette;

  const colorBoxes = colors[level].map((el) => {
    return (
      <ColorBox
        background={el[format]}
        name={el.name}
        key={el.name}
        id={el.id}
        paletteId={id}
        showingFullPalette={true}
        // {...palette}
      />
    );
  });
  function changeLevel(newLevel) {
    setLevel(newLevel);
  }
  function changeFormat(evt) {
    setFormat(evt);
  }

  return (
    <div className="Pallete">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        showingAllColors={true}
      />
      <div className="Pallete-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={palette.palleteName} emoji={palette.emoji} />
    </div>
  );
}
export default Pallete;
