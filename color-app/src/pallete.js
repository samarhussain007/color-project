import React, { Component, useState } from "react";
import ColorBox from "./ColorBox";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Pallete.css";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import seedColors from "./seedColors";
import { generatedPallete } from "./ColorHelper";
// class Pallete extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { level: 500, format: "hex" };
//     this.changeLevel = this.changeLevel.bind(this);
//     this.changeFormat = this.changeFormat.bind(this);
//   }
//   changeLevel(newLevel) {
//     this.setState({ level: newLevel });
//   }

//   changeFormat(evt) {
//     this.setState({ format: evt });
//   }

//   render() {
//     const { colors } = this.props.palette;
//     const { level, format } = this.state;
//     const colorBoxes = colors[level].map((el) => {
//       return <ColorBox background={el[format]} name={el.name} />;
//     });
//     return (
//       <div className="Pallete">
//         <Navbar
//           level={level}
//           changeLevel={this.changeLevel}
//           handleChange={this.changeFormat}
//         />
//         <div className="Pallete-colors">{colorBoxes}</div>
//         {/* footer eventually */}
//       </div>
//     );
//   }
// }

function Pallete(props) {
  const { id } = useParams();
  const findPallete = (id) => seedColors.find((palette) => palette.id === id);
  const palette = generatedPallete(findPallete(id));

  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const { colors } = palette;

  const colorBoxes = colors[level].map((el) => {
    return <ColorBox background={el[format]} name={el.name} />;
  });
  function changeLevel(newLevel) {
    setLevel(newLevel);
  }
  function changeFormat(evt) {
    setFormat(evt);
  }

  return (
    <div className="Pallete">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
      />
      <div className="Pallete-colors">{colorBoxes}</div>
      {/* footer eventually */}
    </div>
  );
}
export default Pallete;
