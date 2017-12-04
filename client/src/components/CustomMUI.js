import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

const muiTheme = getMuiTheme({
  fontFamily: "Roboto, sans-serif",
  palette: {
    primary1Color: "tomato",
    primary2Color: "tomato",
    accent1Color: "tomato",
    pickerHeaderColor: "tomato"
  },
  tabs: {
    height: "4.5em !important",
    backgroundColor: "rgb(203, 145, 78)"
  }
});

export default muiTheme;
