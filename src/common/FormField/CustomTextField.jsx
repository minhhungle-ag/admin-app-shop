import { Box, InputLabel, TextField } from "@mui/material";
import { useController } from "react-hook-form";

export function CustomTextField({
  name,
  control,
  label,

  multiline = false,
  rows = 5,

  InputProps,
  InputLabelProps,
  inputProps,
  size = "medium",

  ...otherTextFieldProps
}) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <Box>
      <InputLabel sx={{ mb: 0.5 }}>{label}</InputLabel>
      <TextField
        fullWidth
        size={size}
        value={value || ""}
        onChange={onChange}
        onBlur={onBlur}
        inputRef={ref}
        variant="outlined"
        error={invalid}
        multiline={multiline}
        rows={rows}
        InputLabelProps={InputLabelProps}
        InputProps={InputProps}
        helperText={error?.message}
        inputProps={inputProps}
        {...otherTextFieldProps}
      />
    </Box>
  );
}
