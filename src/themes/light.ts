import { DeprecatedThemeOptions } from "@mui/material";
import { blue, blueGrey } from "@mui/material/colors";

const LightTheme: DeprecatedThemeOptions = {
  palette: {
    mode: "light",
    // primary: blue,
    // secondary: blueGrey,
  },
  // props: {
  //   MuiButton: {
  //     variant: "contained",
  //   },
  // },
  // overrides: {
  //   MuiTableRow: {
  //     head: {
  //       "& > th ": {
  //         backgroundColor: "whitesmoke",
  //         color: "black",
  //         fontWeight: "bold",
  //       },
  //     },
  //     footer: {
  //       "& > td ": {
  //         backgroundColor: "whitesmoke",
  //         color: "black",
  //         borderBottom: "none",
  //       },
  //     },
  //   },
  //   MuiCssBaseline: {
  //     "@global": {
  //       ":root": {
  //         "scrollbar-color": `${blue[900]} lightgray !important`,
  //       },
  //       "*::-webkit-scrollbar": {
  //         width: "10px",
  //       },
  //       "*::-webkit-scrollbar-track": {
  //         background: "lightgray",
  //       },
  //       "*::-webkit-scrollbar-thumb": {
  //         backgroundColor: blue[900],
  //         border: "none",
  //       },
  //     },
  //   },
  // },
};

export default LightTheme;
