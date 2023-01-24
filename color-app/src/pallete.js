import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Pallete.css";
class Pallete extends Component {
  render() {
    const colorBoxes = this.props.colors.map((el) => {
      return <ColorBox background={el.color} name={el.name} />;
    });
    return (
      <div className="Pallete">
        <div className="Pallete-colors">{colorBoxes}</div>
        {/* footer eventually */}
      </div>
    );
  }
}
export default Pallete;
