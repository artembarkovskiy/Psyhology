import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegPage from "../pages/auth/RegPage";
import HomePage from "../pages/home/HomePage";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
        <Route path="/" element ={<HomePage/>}/>
      <Route path="/login" element={<LoginPage />} />
      
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
