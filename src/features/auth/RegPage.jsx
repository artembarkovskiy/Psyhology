import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserService } from "../user/user.service";
import { useNotification } from "../notifications/hooks/useNotification";

const RegPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { addNotification } = useNotification();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userService = new UserService();
      await userService.getAllUsers();
      const response = await userService.createUser(formData);
      console.log(response);

      addNotification("Реєстрація пройшла успішно!", "success");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });

      navigate("/login");
    } catch (err) {
      addNotification(
        err.response?.data?.message ||
          "Реєстрація не вдалася. Спробуйте ще раз.",
        "error"
      );
    }
  };

  return (
    <div>
      <h1>Реєстрація</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ім'я:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Прізвище:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Ел. Пошта:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Пароль:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Зареєструватись</button>
      </form>
    </div>
  );
};

export default RegPage;
