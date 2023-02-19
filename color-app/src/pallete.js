import React, { Component, useState } from "react";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
// import "./Pallete.css";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import seedColors from "./seedColors";
import { generatedPallete } from "./ColorHelper";
import PaletteFooter from "./PaletteFooter";
import { styled } from "@mui/material";
import { useEffect } from "react";
// import generatedPallete from "./ColorHelper";

function Pallete(props) {
  useEffect(() => {
    generatedPallete(...props.palette);
  }, [props.palette]);
  const { id } = useParams();
  const findPallete = (id) =>
    props.palette.find((palette) => palette.id === id);
  const palette = generatedPallete(findPallete(id));

  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const { colors } = palette;

  const StyledPalette = styled("div")(
    () => `
  height: 100vh;
  overflow: hidden;

  .Pallete-colors {
    height: 90%;
  }
  `
  );

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
    <StyledPalette className="Pallete">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        showingAllColors={true}
      />
      <div className="Pallete-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={palette.palleteName} emoji={palette.emoji} />
    </StyledPalette>
  );
}
export default Pallete;
