import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserService } from "../user/user.service";
import { setToken } from "../../utils/localStorage";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userService = new UserService()

    const response = await userService.loginUser({
      email:email, 
      password:password
    })

    console.log(response)
    
    if(response){
      setToken(response.token)
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
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleEmailInputChange}
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
