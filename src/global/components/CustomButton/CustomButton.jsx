import { Box, Button, SxProps } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import customButtonStyles from "./CustomButton.styles";


const CustomButton = (props) => {
  const classes = customButtonStyles;
  const appliedClass = props.customClasses;

  const processing = props.loading ? props.loading : false;
  const disabled = props.disabled ? props.disabled : false;

  return (
    <Button
      startIcon={props.icon}
      variant={props.variant}
      sx={
        props.customClasses
          ? [classes.btnStyle, props.customClasses]
          : classes.btnStyle
      }
      onClick={(event) => props.onClick(event)}
      disabled={processing || disabled}
    >
      {processing ? (
        <CircularProgress sx={classes.loadingStyle} />
      ) : (
        props.label
      )}
    </Button>
  );
};

export default CustomButton;
