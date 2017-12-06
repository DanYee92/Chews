import getMuiTheme from "material-ui/styles/getMuiTheme";

const muiTheme = getMuiTheme({
  fontFamily: "Work Sans, sans-serif",
  palette: {
    primary1Color: "rgb(255, 99, 71)",
    primary2Color: "rgb(255, 99, 71)",
    accent1Color: "rgb(126, 81, 50)",
    pickerHeaderColor: "rgb(255, 99, 71)"
  },
  tabs: {
    height: "4.5em !important",
    backgroundColor: "rgb(203, 145, 78)"
  }
});

export default muiTheme;
