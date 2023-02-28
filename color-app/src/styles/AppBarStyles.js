import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { DRAWER_WIDTH } from "./Constants";
import sizes from "./sizes";

const drawerWidth = DRAWER_WIDTH;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(
  ({ theme, open }) => (
    {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }),
    },
    `
    .nav-btns {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      ${sizes.down("xs")}{
        margin-right: 0.5rem;
      }
    }
    .nav-btns button {
      margin: 0 0.5rem;
      ${sizes.down("xs")}{
        margin: 0 0.2rem;
        padding: 0.3rem;
      }
    }
    
  `
  )
);

export default AppBar;
