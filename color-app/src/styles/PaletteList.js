import { styled } from "@mui/material/styles";
import sizes from "./sizes";

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
        ${sizes.down("xl")}{
          width: 60%;
        }

        ${sizes.down("xs")}{
          width: 75%;
        }
      }
      .nav{
        display: flex;
        width: 100%;
        justify-content:space-between;
        color: "white";
        align-items: center;
        color: white;
        & a{
          color: white;
        }
      }
      .palettes{
        boxSizing: border-box;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3,30%);
        grid-gap: 1.5rem;

        ${sizes.down("md")}{
          grid-template-columns: repeat(2,50%);
        }

        ${sizes.down("xs")}{
          grid-template-columns: repeat(1,100%);
          grid-gap: 1rem;
        }
      }

  `
);

export default StyledPaletteList;
