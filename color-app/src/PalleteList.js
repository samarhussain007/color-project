import { palette } from "@mui/system";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPallete from "./MiniPalette";
import "./PaletteList.css";
class PalleteList extends Component {
  render() {
    const { palettes } = this.props;

    return (
      <div className="PaletteList">
        <h1>React Colors</h1>
        {palettes.map((palette) => {
          return <MiniPallete {...palette} />;
        })}
      </div>
    );
  }
}
export default PalleteList;
