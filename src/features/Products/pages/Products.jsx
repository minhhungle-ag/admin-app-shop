import { Box, Stack, Typography } from "@mui/material";
import { ProductList } from "../components/ProductList";

export default function Products() {
  return (
    <Stack spacing={3}>
      <Typography variant="h3" fontWeight={400}>
        Sản phẩm
      </Typography>

      <Box>
        <ProductList />
      </Box>
    </Stack>
  );
}
