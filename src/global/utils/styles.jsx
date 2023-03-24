import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import InputBase from "@mui/material/InputBase";
import Radio, { RadioProps } from "@mui/material/Radio";
import { createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import Switch from "@mui/material/Switch";
import {  withStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
const borderRadius = "30px";

const primaryColor = "#0d3057";
const primaryColorBlack = "#000";
const primaryColorPurple = "#A020F0";
const blueAsteriskColor = "#0000FF";

const primaryBackgroundColor = "#E5E5E5";
const borderColor = "rgba(0, 0, 0, 0.12)";
const primaryBorderColor = "rgba(0,0,0,1)";
const borderStyle = "1px solid " + borderColor;
const infoTextColor = "#888888";
const disabledBackgroundColor = "#888888";
const defaultFontSize = 14;
const defaultBoxShadow = "0 0 0 0.2rem rgb(0 123 255 / 25%)";
const drawerWidth = 300;

const mainContainer = {
  margin: "20px",
};

const blackFont = {
  fontFamily: "Poppins",
  fontWeight: 900,
  fontStyle: "normal",
};

const boldFont = {
  fontFamily: "Poppins_Bold",
  fontWeight: 700,
};

const mediumFont = {
  fontFamily: "Poppins_Medium",
  fontWeight: 500,
};

const regularFont = {
  fontFamily: "Poppins_Regular",
  fontWeight: 400,
};

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Poppins_Regular",
      "Poppins_Medium",
      "Poppins_Bold",
      "Poppins_Black",
      "sans-serif",
    ].join(","),
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       "@font-face": [raleway],
  //     },
  //   },
  // },
});

const getRelativeFontSize = (value = 0) => {
  let size = defaultFontSize + value;
  return size + "px";
};

const customButtonStyle = {
  borderRadius: "15px",
  border: "none",
  fontSize: getRelativeFontSize(),
  textAlign: "center",
  backgroundColor: "#EFA185",
  padding: "10px 15px",
  boxShadow: " 4px 4px 30px rgba(0, 0, 0, 0.03)",
  color: "black",
  cursor: "pointer",
  textTransform: "none",
};

const customTextFieldStyle = {
  borderRadius: borderRadius,
  position: "relative",
  border: "none",
  fontSize: getRelativeFontSize(2),
  backgroundColor: primaryBackgroundColor,
  padding: "10px 15px",
  boxShadow: "none",
  width: "100%",
};

const headingText = {
  display: "inline-block",
  fontSize: getRelativeFontSize(8),
};

const centerItemFlex = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const centerItemAbsolute = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const CustomInput = withStyles((theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
      backgroundColor: theme.palette.common.white,
      border: "1px solid #ced4da",
      borderRadius: borderRadius,
      padding: "0 5px",
    },
    input: {
      position: "relative",
      fontSize: getRelativeFontSize(),
      width: "100%",
      padding: "10px 12px",
    },
  })
)(InputBase);

const CustomSwitch = withStyles({
  switchBase: {
    color: "grey",
    "&$checked": {
      color: primaryColor,
      "& + $track": {
        backgroundColor: primaryColor,
      },
    },
    "&$checked + $track": {
      color: primaryColor,
    },
  },
  track: { backgroundColor: "grey" },
  checked: {},
})(Switch);

const CustomCheckbox = withStyles({
  root: {
    color: primaryColor,
    "&$checked": {
      color: primaryColor,
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CustomRadio = withStyles({
  root: {
    color: primaryColor,
    "&$checked": {
      color: primaryColor,
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export const BootstrapInput = withStyles((theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(4),
      },
      backgroundColor: theme.palette.common.white,
      // border: "1px solid #ced4da",
      borderRadius: "15px",
      padding: "5px 5px",
      width: "300px",
    },
    input: {
      position: "relative",
      fontSize: getRelativeFontSize(),
      width: "100%",
      padding: "10px 12px",
    },
  })
)(InputBase);

export {
  borderRadius,
  primaryColor,
  disabledBackgroundColor,
  primaryBackgroundColor,
  primaryColorBlack,
  primaryColorPurple,
  primaryBorderColor,
  blueAsteriskColor,
  borderColor,
  borderStyle,
  infoTextColor,
  defaultBoxShadow,
  customButtonStyle,
  customTextFieldStyle,
  headingText,
  centerItemFlex,
  centerItemAbsolute,
  CustomInput,
  CustomSwitch,
  CustomCheckbox,
  CustomRadio,
  regularFont,
  blackFont,
  boldFont,
  mediumFont,
  getRelativeFontSize,
  theme,
  mainContainer,
  drawerWidth,
};
