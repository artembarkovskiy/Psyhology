import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import HomePage from "../features/home/HomePage";
import CategoryPage from "../features/category/CategoryPage";
import RegPage from "../features/auth/RegPage";
import ServicePage from "../features/services/ServicePage";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegPage />} />
      <Route
        path="/category"
        element={
          <ProtectedRoute>
            <CategoryPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/service"
        element={
          <ProtectedRoute>
            <ServicePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
