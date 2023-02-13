import chroma from "chroma-js";
import { styled } from "@mui/material";

const MyCustomDiv = styled("div")(({ theme, props }) => {
  return `
    background-color: ${props.background};
    width: 20%;
    height: ${props.showingFullPalette ? "25%" : "50%"};
    margin: 0 auto;
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-bottom: -3.5px;
    &:hover button {
      opacity: 1;
    }

    .color-name {
      color: ${
        chroma(props.background).luminance() <= 0.08 ? "white" : "black"
      };
    }

    .see-more {
      color: ${
        chroma(props.background).luminance() >= 0.7
          ? "rgba(0,0,0,0.6)"
          : "white"
      };
      background: "rgba(255, 255, 255, 0.3)",
      position: "absolute",
      border: "none",
      right: "0px",
      bottom: "0px",
      width: "60px",
      height: "30px",
      textAlign: "center",
      lineHeight: "30px",
      textTransform: "uppercase",
    }

    .copy-button {
      color: ${
        chroma(props.background).luminance() >= 0.7
          ? "rgba(0,0,0,0.6)"
          : "white"
      };
      width: 100px;
      height: 30px;
      position: absolute;
      display: inline-block;
      top: 50%;
      left: 50%;
      transform:translate(-50%,-50%)
      text-align: center;
      outline: none;
      background: rgba(255, 255, 255, 0.3);
      font-size: 1rem;
      line-height: 30px;
      text-transform: uppercase;
      border: none;
      text-decoration: none;
      opacity: 0;
    }

    .copy-text {
      color: ${chroma(props.background).luminance() >= 0.7 ? "black" : "white"};
    }

    .copy-overlay{
      opacity: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      transition: transform 0.6s ease-in-out;
      transform: scale(0.1);
    }

    .copy-overlay.show{
      opacity: 1;
      transform: scale(50);
      z-index: 10;
      position: absolute;
    }

    

  `;
});

export default MyCustomDiv;
