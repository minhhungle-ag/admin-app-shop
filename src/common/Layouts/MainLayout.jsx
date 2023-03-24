import { Box, Stack, Toolbar } from "@mui/material";
import { Header } from "../Components/Header";
import { SideBar } from "../Components/SideBar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import ContactsIcon from "@mui/icons-material/Contacts";

const navList = [
  {
    label: "Tổng quan",
    path: "dashboard",
    icon: <DashboardIcon />,
  },

  {
    label: "Quản lý sản phẩm",
    path: "products-management",
    icon: <CategoryIcon />,
  },

  {
    label: "Quản lý giỏ hàng",
    path: "carts-management",
    icon: <ShoppingCartIcon />,
  },

  {
    label: "Quản lý người dùng",
    path: "users-management",
    icon: <PeopleIcon />,
  },

  {
    label: "Quản lý liên hệ",
    path: "contact-management",
    icon: <ContactsIcon />,
  },
];

export function MainLayout({ children }) {
  return (
    <Stack direction="row" sx={{ height: "100vh" }}>
      <Header />
      <SideBar navList={navList} />
      <Box flexGrow={1}>
        <Toolbar />
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Stack>
  );
}
