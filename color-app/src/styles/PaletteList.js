import { styled } from "@mui/material/styles";

const StyledPaletteList = styled("div")(
  () => `
    background-color:blue;
    height:100vh;
    display: flex;
       align-items: flex-start;
      justify-content: center;
  
      .container{
        width:50%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .nav{
        display: flex;
        width: 100%;
        justify-content:space-between;
        color: "white";
      }
      .palettes{
        boxSizing: border-box;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3,30%);
        grid-gap: 5%;
      }
  `
);

export default StyledPaletteList;
