import chroma from "chroma-js";
import { styled } from "@mui/material";
import sizes from "./sizes";

const MyCustomDiv = styled("div")(({ theme, props }) => {
  return `
    background-color: ${props.background};
    width: 20%;
    height: ${props.showingFullPalette ? "25%" : "50%"};
    margin: 0 auto;
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-bottom: -6px;
    &:hover button {
      opacity: 1;
    }
    hey

    
  


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

    .ColorBox {
      width: 20%;
      height: 25%;
      margin: 0 auto;
      display: inline-block;
      position: relative;
      cursor: pointer;
      margin-bottom: -4px;
    }
    
    .SingleColorPalette .ColorBox {
      height: 50%;
      /* height: 20%; */
    }
    
    .go-back {
      background-color: black;
    }
    
    .copy-button,
    .back-button {
      width: 100px;
      height: 30px;
      position: absolute;
      display: inline-block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      outline: none;
      border: none;
      background: rgba(255, 255, 255, 0.281);
      font-size: 1rem;
      line-height: 30px;
      color: white;
      text-transform: uppercase;
      transition: all 0.5s;
      text-decoration: none;
    }
    .copy-button {
      opacity: 0;
    }
    .ColorBox:hover .copy-button {
      opacity: 1;
    }
    
    .box-content {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      padding: 10px;
      color: black;
      letter-spacing: 1px;
      font-size: 12px;
      text-transform: uppercase;
    }
    
    .light-text {
      color: white;
    }
    
    .ColorBox .dark-text {
      color: black;
    }
    
    .see-more {
      background: rgba(255, 255, 255, 0.281);
      position: absolute;
      border: none;
      right: 0;
      bottom: 0;
      color: white;
      width: 60px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      text-transform: uppercase;
    }
    
    .copy-overlay {
      opacity: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      transition: transform 0.6s ease-in-out;
      transform: scale(0.1);
    }
    .copy-overlay.show {
      opacity: 1;
      transform: scale(50);
      z-index: 10;
      position: absolute;
    }
    
    .copy-msg {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: 64px;
    
      transform: scale(0.1);
      opacity: 0;
      color: white;
    }
    
    .copy-msg.show {
      opacity: 1;
      transform: scale(1);
      z-index: 25;
      transition: all 0.4s ease-in-out;
      transition-delay: 0.3s;
    }
    
    .copy-msg h1 {
      font-size: 400;
      text-shadow: 1px 2px black;
      background: rgba(255, 255, 255, 0.2);
      width: 100%;
      text-align: center;
      margin-bottom: 0;
      padding: 1rem;
      text-transform: uppercase;
    }
    
    .copy-msg p {
      font-size: 2rem;
      font-weight: 100;
    }
    

    

  `;
});

export default MyCustomDiv;

// ${sizes.down("lg")} {
//   width: 25%;
//   height: ${props.showingFullPalette ? "20%" : "33.3333%"};
// }

// ${sizes.down("md")}{
//   width: 50%;
//   height: ${props.showingFullPalette ? "10%" : "20%"};
// }

// ${sizes.down("xs")}{
//   width: 100%;
//   height: ${props.showingFullPalette ? "10%" : "20%"};
// }

// ${sizes.down("xs")}{
//   font-size: 5rem;
// }
