import { palette, style } from "@mui/system";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import MiniPallete from "./MiniPalette";
import { makeStyles } from "@mui/styles";
import StyledPaletteList from "./styles/PaletteList";
import { Button } from "@mui/material";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PalleteList = ({ palettes, deletePalette, resetPallete }) => {
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
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            {" "}
            <Link to="/palette/new">Create Palette</Link>
            <Button color="error" variant="contained" onClick={resetPallete}>
              RESET
            </Button>
          </div>
        </nav>

        <TransitionGroup className="palettes">
          {palettes.map((palette) => {
            return (
              <CSSTransition key={palette.id} classNames="item" timeout={500}>
                <MiniPallete
                  {...palette}
                  handleClick={() => handleClick(palette.id)}
                  deletePalette={deletePalette}
                  key={palette.id}
                  id={palette.id}
                />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    </StyledPaletteList>
  );
};

export default PalleteList;
