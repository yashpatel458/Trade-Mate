import {
  centerItemFlex,
  customButtonStyle,
  disabledBackgroundColor,
  mediumFont,
} from "../../utils/styles";

const customButtonStyles = {
  btnStyle: {
    width: "20%",
    padding: "10px 20px",
    backgroundColor: "white",
    fontStyle: "bold",
    fontSize: "14px",
    fontFamily: "Poppins, sans-serif",
    borderRadius: "50px",
  },
  // btnStyle:  hover {
  //   width: "20%",
  //   padding: "10px 20px",
  //   backgroundColor: "white",
  //   fontStyle: "bold",
  //   fontSize: "14px",
  //   fontFamily: "Poppins, sans-serif",
  //   borderRadius: "50px",
  // },
  loadingStyle: {
    color: "white",
    width: "25px !important",
    height: "25px !important",
  },
  disabled: {
    color: disabledBackgroundColor,
  },
};

export default customButtonStyles;