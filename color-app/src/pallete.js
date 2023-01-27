import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Pallete.css";
import Navbar from "./Navbar";

class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((el) => {
      return <ColorBox background={el.hex} name={el.name} />;
    });
    return (
      <div className="Pallete">
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="Pallete-colors">{colorBoxes}</div>
        {/* footer eventually */}
      </div>
    );
  }
}
export default Pallete;
