import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import HomePage from "../features/home/HomePage";
import CategoryPage from "../features/category/CategoryPage";
import RegPage from "../features/auth/RegPage";
import ServicePage from "../features/services/ServicePage";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="registration" element={<RegPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/service" element={<ServicePage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
