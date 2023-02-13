import { palette, style } from "@mui/system";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import MiniPallete from "./MiniPalette";
import { makeStyles } from "@mui/styles";
import StyledPaletteList from "./styles/PaletteList";

// const useStyles = makeStyles({
//   root: {
//     backgroundColor: "blue",
//     height: "100vh",
//     display: "flex",
//     alignItems: "flex-start",
//     justifyContent: "center",
//   },
//   container: {
//     width: "50%",
// display: "flex",
// alignItems: "flex-start",
// flexDirection: "column",
// flexWrap: "wrap",
//   },
//   nav: {
// display: "flex",
// width: "100%",
// justifyContent: "space-between",
// color: "white",
//   },
//   palettes: {
// boxSizing: "border-box",
// width: "100%",
// display: "grid",
// gridTemplateColumns: "repeat(3,30%)",
// gridGap: "5%",
//   },
// });

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
