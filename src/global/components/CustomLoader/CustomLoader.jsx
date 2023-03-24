import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import LoaderGif from "../../../assets/loader.gif";

const CustomLoader = (props) => {
  const { open } = props;
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.tooltip }}
      open={open}
    >
      <img src={LoaderGif} alt="loader" />
      {/* <CircularProgress color="inherit" /> */}
    </Backdrop>
  );
};

export default CustomLoader;
