import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "../../common/Layouts/MainLayout";
import Products from "../Products/pages/Products";

export default function Main() {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<Navigate to="products" />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </MainLayout>
  );
}
