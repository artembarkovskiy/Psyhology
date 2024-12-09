import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserService } from "../user/user.service";
import { setToken } from "../../utils/localStorage";

const HomePage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserProfile = () => {
      try {
        const userService = new UserService();
        const profile = userService.getUserProfile(); // Виклик асинхронного методу
        setUser(profile); // Збереження email з профілю
      } catch (error) {
        console.error("Не вдалося завантажити профіль користувача:", error);
        navigate("/login"); // Перенаправлення на сторінку входу, якщо сталася помилка
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleAccountClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    setToken(undefined); // Видалення токена\
    navigate("/login"); // Перенаправлення на сторінку логіну
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1em",
          backgroundColor: "#f8f9fa",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ margin: 0 }}>My Website</h2>

        <div style={{ display: "flex", alignItems: "center" }}>
          {user.email && (
            <span
              style={{
                marginRight: "1em",
                color: "#007bff",
                fontWeight: "bold",
              }}
            >
              {user.email}
            </span>
          )}

          <div
            onClick={handleAccountClick}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0.5em",
                border: "1px solid #ccc",
                borderRadius: "50%",
                backgroundColor: "#007bff",
                color: "#fff",
              }}
            >
              <span>👤</span>
            </div>

            {isMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  marginTop: "0.5em",
                  padding: "1em",
                  backgroundColor: "black",
                  border: "1px solid #ddd",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <p>
                  <strong>Ім'я:</strong> {user.given_name}
                </p>
                <p>
                  <strong>Прізвище:</strong> {user.family_name}
                </p>
                <button
                  onClick={handleLogout}
                  style={{
                    marginTop: "1em",
                    padding: "0.5em 1em",
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Вийти
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main style={{ padding: "2em", textAlign: "center" }}>
        <h1>Головна сторінка</h1>
        <p>Ласкаво просимо на головну сторінку вашого сайту!</p>
      </main>
    </div>
  );
};

export default HomePage;
