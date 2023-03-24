import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function Dropdown(props) {
  const {
    Label,
    formClasses,
    value,
    onChangeHandle,
    SelectClasses,
    items,
    attribute = null,
  } = props;
  return (
    <>
      <FormControl sx={formClasses}>
        <InputLabel id={Label + "-label"}>{Label}</InputLabel>
        <Select
          value={value}
          onChange={onChangeHandle}
          sx={SelectClasses}
          labelId={Label + "-label"}
          label={Label}
        >
          {items.map((item) => (
            <MenuItem value={attribute != null ? item[attribute] : item}>
              {attribute != null ? item[attribute] : item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
