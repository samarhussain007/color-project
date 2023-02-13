// import React, { Component } from "react";

// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { Link } from "react-router-dom";
// import { withStyles } from "@mui/styles";
// import chroma from "chroma-js";
// import "./colorBox.css";
// const styles = {
//   ColorBox: {
//     width: "20%",
//     height: "25%",
//     // height: (props) => (props.showingFullPalette ? "25%" : "50%"),
//     margin: "0 auto",
//     display: "inline-block",
//     position: "relative",
//     cursor: "pointer",
//     marginBottom: "-3.5px",
//     "&:hover button": {
//       opacity: 1,
//     },
//   },
//   copyText: {
//     color: (props) =>
//       chroma(props.background).luminance() >= 0.7 ? "black" : "white",
//   },
//   colorName: {
//     color: (props) =>
//       chroma(props.background).luminance() <= 0.08 ? "white" : "black",
//   },
//   seeMore: {
//     color: (props) =>
//       chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
//     background: "rgba(255, 255, 255, 0.3)",
//     position: "absolute",
//     border: "none",
//     right: "0px",
//     bottom: "0px",
//     width: "60px",
//     height: "30px",
//     textAlign: "center",
//     lineHeight: "30px",
//     textTransform: "uppercase",
//   },
//   copyButton: {
//     color: (props) => {
//       console.log(props.background);
//       console.log(
//         chroma(props.background).luminance() >= 0.7
//           ? "rgba(0,0,0,0.6)"
//           : "white"
//       );
//       return chroma(props.background).luminance() >= 0.7
//         ? "rgba(0,0,0,0.6)"
//         : "white";
//     },
//     width: "100px",
//     height: "30px",
//     position: "absolute",
//     display: "inline-block",
//     top: "50%",
//     left: "50%",
//     marginLeft: "-50px",
//     marginTop: "-15px",
//     textAlign: "center",
//     outline: "none",
//     background: "rgba(255, 255, 255, 0.3)",
//     fontSize: "1rem",
//     lineHeight: "30px",
//     textTransform: "uppercase",
//     border: "none",
//     textDecoration: "none",
//     opacity: 0,
//   },
// };
// class ColorBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { copied: false };
//     this.changeCopyState = this.changeCopyState.bind(this);
//   }
//   changeCopyState() {
//     this.setState({ copied: true }, () => {
//       setTimeout(() => this.setState({ copied: false }), 1500);
//     });
//   }
//   render() {
//     const {
//       name,
//       background,
//       paletteId,
//       id,
//       showLink = "true",
//       classes,
//     } = this.props;
//     const { copied } = this.state;
//     const isDarkColor = chroma(background).luminance() <= 0.08;
//     const isLightColor = chroma(background).luminance() >= 0.7;

//     return (
//       <CopyToClipboard text={background} onCopy={this.changeCopyState}>
//         <div style={{ background: background }} className="ColorBox">
//           <div
//             style={{ background: background }}
//             className={`copy-overlay ${copied && "show"}`}
//           ></div>
//           <div className={`copy-msg ${copied && "show"}`}>
//             <h1>copied!</h1>
//             <p className={isLightColor && "dark-text"}>
//               {this.props.background}
//             </p>
//           </div>
//           <div className="copy-container">
//             <div className="box-content">
//               <span className={isDarkColor && "light-text"}>{name}</span>
//             </div>
//             <button className={`copy-button ${isLightColor && "dark-text"}`}>
//               Copy
//             </button>
//           </div>
//           {showLink && (
//             <Link
//               to={`/palette/${paletteId}/${id}`}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <span className={`see-more ${isLightColor && "dark-text"}`}>
//                 More
//               </span>
//             </Link>
//           )}
//         </div>
//       </CopyToClipboard>
//     );
//   }
// }
// export default withStyles(styles)(ColorBox);

import React from "react";
import { styled } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./colorBox.css";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@mui/styles";
import MyCustomDiv from "./styles/ColorBoxStyles";

function ColorBox(props) {
  const { name, background, paletteId, id, showingFullPalette } = props;
  const [copied, setCopied] = React.useState(false);

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // const isDarkColor = chroma(background).luminance() <= 0.08;
  // const isLightColor = chroma(background).luminance() >= 0.7;

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <MyCustomDiv props={props}>
        <div
          style={{ background: background }}
          className={`copy-overlay ${copied && "show"}`}
        ></div>
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>copied!</h1>
          <p className="copy-text">{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className="color-name">{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        {showingFullPalette && (
          <Link
            to={`/palette/${paletteId}/${id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="see-more">More</span>
          </Link>
        )}
      </MyCustomDiv>
    </CopyToClipboard>
  );
}

export default ColorBox;
