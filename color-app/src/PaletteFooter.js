import React from "react";
import StyledFooter from "./styles/PalleteFooter";
function PaletteFooter(props) {
  const { paletteName, emoji } = props;
  return (
    <StyledFooter className="Palette-footer">
      <div>{paletteName}</div>
      <span className="emoji">{emoji}</span>
    </StyledFooter>
  );
}

export default PaletteFooter;
