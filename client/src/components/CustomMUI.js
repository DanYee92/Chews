import getMuiTheme from "material-ui/styles/getMuiTheme";

const muiTheme = getMuiTheme({
  fontFamily: "Work Sans, sans-serif",
  palette: {
    primary1Color: "tomato",
    primary2Color: "tomato",
    accent1Color: "rgb(126, 81, 50)",
    pickerHeaderColor: "tomato"
  },
  tabs: {
    height: "4.5em !important",
    backgroundColor: "rgb(203, 145, 78)"
  }
});

export default muiTheme;
