const predictStyle = {
  external: {
    display: "flex",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: "bold",
  },
  form: {
    fontFamily: "Poppins",

    m: 2,
    display: { xs: "flex", sm: "flex" },
    color: "#fff",
  },
  dropdown: {
    fontFamily: "Poppins",
    backgroundColor: "#FFFFFF",
    height: "50px",
    boxShadow: "4px 4px 30px rgba(0, 0, 0, 0.03)",
    borderRadius: "15px",
    border: 0,
    color: "#000",
  },
  datePicker: {
    fontFamily: "Poppins",
    // backgroundColor: "#FFFFFF",
    "& .MuiInputBase-input": {
      fontSize: "20px",
      borderRadius: "10px",
      position: "relative",
      padding: "10px",
      backgroundColor: "#ffffff",
    },
    "& .MuiOutlinedInput-root": {
      fontSize: "20px",
      borderRadius: "10px",
      backgroundColor: "#ffffff",
      "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
        borderColor: "#ffffff",
      },
    },
  },
  fullWidth: {
    display: "block",
    width: "100%",
  },
};
export default predictStyle;