import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Імітуємо авторизацію, щоб продемонструвати логіку
  const isAuthenticated = localStorage.getItem("user") !== null;

  // Обробник для відкриття/закриття меню
  const handleAccountClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Верхній навігаційний бар */}
      <header
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "1em",
          backgroundColor: "#f8f9fa",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Іконка акаунта */}
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
            {/* Іконка профілю */}
            <span>👤</span>
          </div>

          {/* Випадаюче меню для неавторизованих користувачів */}
          {!isAuthenticated && isMenuOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                marginTop: "0.5em",
                padding: "1em",
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <button
                onClick={handleLoginClick}
                style={{
                  marginBottom: "0.5em",
                  padding: "0.5em",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Увійти
              </button>
              <button
                onClick={handleRegisterClick}
                style={{
                  padding: "0.5em",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Зареєструватися
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Основний контент */}
      <main style={{ padding: "2em", textAlign: "center" }}>
        {/* Просто текст замість елементів для вводу */}
        <h1>Головна сторінка</h1>
        <p>Ласкаво просимо на головну сторінку вашого сайту!</p>
      </main>
    </div>
  );
};

export default HomePage;
