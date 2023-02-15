import { styled } from "@mui/material";

const StyledSingleColorPalette = styled("div")(
  () => `
  height: 100vh;
  overflow: hidden;

  .Pallete-colors {
    height: 90%;
  }

  .go-back {
    width: 20%;
    height: 50%;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-bottom: -4px;
    opacity: 1;
    background-color: black;
  }

  .back-button {
    color: white;
    width: 100px;
    height: 30px;
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    outline: none;
    background: rgba(255, 255, 255, 0.3);
    text-transform: uppercase;
    border: none;
    text-decoration: none;
  }

  .back-button:hover {
    background: rgba(255, 255, 255, 0.5);
    color: black;
  }
  `
);

export default StyledSingleColorPalette;
