import { TextField } from "@mui/material";
import * as React from "react";
import { useController } from "react-hook-form";

export function InputField({
  name,
  control,
  label,
  multiline = false,
  rows = 5,

  InputProps,
  InputLabelProps,
  inputProps,
  onFieldChange,

  ...otherTextFieldProps
}) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  function handleChange(e) {
    const value = e.target.value || "";
    onChange(e);
    onFieldChange?.(value, e);
  }

  return (
    <TextField
      fullWidth
      size="small"
      value={value || ""}
      onChange={handleChange}
      onBlur={onBlur}
      inputRef={ref}
      label={label}
      variant="outlined"
      error={invalid}
      multiline={multiline}
      rows={rows}
      InputProps={InputProps}
      InputLabelProps={InputLabelProps}
      helperText={error?.message}
      inputProps={inputProps}
      {...otherTextFieldProps}
    />
  );
}
