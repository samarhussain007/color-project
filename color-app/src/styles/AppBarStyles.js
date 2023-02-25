import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { DRAWER_WIDTH } from "./Constants";

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
    }
    .nav-btns button {
      margin: 0 0.5rem;
    }
    
  `
  )
);

export default AppBar;
