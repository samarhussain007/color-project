import { palette, style } from "@mui/system";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import MiniPallete from "./MiniPalette";
import { makeStyles } from "@mui/styles";
import StyledPaletteList from "./styles/PaletteList";

const PalleteList = ({ palettes }) => {
  // const history = useHistory();
  const navigate = useNavigate();

  // const classes = useStyles();

  const handleClick = (id) => {
    navigate(`/palette/${id}`);
  };

  return (
    <StyledPaletteList>
      <div className="container">
        <nav className="nav">
          <h1>React Colors</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className="palettes">
          {palettes.map((palette) => {
            return (
              <MiniPallete
                {...palette}
                handleClick={() => handleClick(palette.id)}
                key={palette.id}
              />
            );
          })}
        </div>
      </div>
    </StyledPaletteList>
  );
};

export default PalleteList;
