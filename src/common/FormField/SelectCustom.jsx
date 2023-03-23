import { MenuItem, Select } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function SelectCustom({
  value,
  onChange,
  label,
  optionList,
  ...otherSelectProps
}) {
  return (
    <Select
      value={value || ""}
      label={label}
      onChange={onChange}
      {...otherSelectProps}
    >
      {optionList?.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          <Stack direction="row" alignItems="center" spacing={0.25}>
            {option.icon}{" "}
            <Typography sx={{ pl: option.icon ? 0.5 : 0 }}>
              {option.label}
            </Typography>
          </Stack>
        </MenuItem>
      ))}
    </Select>
  );
}
