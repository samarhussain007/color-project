import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Pallete.css";

class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(newLevel) {
    console.log(newLevel);
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
        <div className="slider">
          <Slider
            defaultValue={this.state.level}
            min={100}
            max={900}
            step={100}
            onChange={this.changeLevel}
          />
        </div>
        <div className="Pallete-colors">{colorBoxes}</div>
        {/* footer eventually */}
      </div>
    );
  }
}
export default Pallete;
