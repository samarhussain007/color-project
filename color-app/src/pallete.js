import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Pallete.css";
import Navbar from "./Navbar";

class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }

  changeFormat(evt) {
    this.setState({ format: evt });
  }

  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((el) => {
      return <ColorBox background={el[format]} name={el.name} />;
    });
    return (
      <div className="Pallete">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="Pallete-colors">{colorBoxes}</div>
        {/* footer eventually */}
      </div>
    );
  }
}
export default Pallete;
