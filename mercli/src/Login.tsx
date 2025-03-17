import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./componentes/Header";
import "./index.css";
import { loginUser } from "../User Service/api";

const Login: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsClicked(true);
    setError("");

    try {
      const response = await loginUser({ username: email, password });
      console.log("Login successful:", response);
      localStorage.setItem("token", response.token); // Guarda el token en localStorage
      navigate("/store"); // Redirige al usuario a la página de la tienda
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please check your credentials.");
      setIsClicked(false); // Restablece el estado del botón
    }
  };

  return (
    <div className="wrapper-register">
      <header>
        <Header />
      </header>

      <main className="mobilelayout">
        <article>Log in</article>
        <div className="inputbox">
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
          <i></i>
        </div>
        <div className="inputbox">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
          <i></i>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="gotoreg">
          <p>
            Don't have <br />
            an account?
          </p>
          <button className="registro" onClick={() => navigate("/Register")}>
            Sign up
          </button>
        </div>

        <button className="btn" onClick={handleLogin} disabled={isClicked}>
          <span className={isClicked ? "btn-text-two" : "btn-text-one"}>
            {isClicked ? "Great!" : "Log in"}
          </span>
        </button>
      </main>

      <footer></footer>
    </div>
  );
};

export default Login;