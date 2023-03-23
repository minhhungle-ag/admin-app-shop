import { Navigate, Router, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

export default function Auth() {
  return (
    <Routes>
      <Router index element={<Navigate to="login" />} />
      <Router path="login" element={<Login />} />
      <Router path="sign-up" element={<SignUp />} />
    </Routes>
  );
}
