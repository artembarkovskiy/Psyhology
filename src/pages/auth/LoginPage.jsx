import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const users = [
  {
    userName: "admin",
    password: "admin",
    role: "admin",
  },
  {
    userName: "user",
    password: "user",
    role: "user",
  },
];

const LoginPage = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameInputChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const user = users.find((user) => user.userName === userName);

    if (!user) {
      alert("User does not exist");
      return;
    }

    if (user.password !== password) {
      alert("Invalid password");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    if (user.role === "admin") {
      navigate("/users");
      return;
    }

    if (user.role === "user") {
      navigate("/");
      return;
    }
  };

  // Обробник для переходу на сторінку реєстрації
  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "960px",
      }}
    >
      <h1>Login</h1>
      <div
        style={{
          padding: "1.5em",
          border: "1px solid #ccc",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={userName}
              onChange={handleUserNameInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordInputChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <button 
          onClick={handleRegisterRedirect}
          style={{
            marginTop: "1em",
            padding: "0.5em 1em",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Бажаєте зареєструватися?
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
