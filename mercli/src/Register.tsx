import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./componentes/Header";
import "./index.css";
import { registerUser } from "../User Service/api";

const Register: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    setIsClicked(true);
    setError("");

    try {
      const response = await registerUser({ username, email, password });
      console.log("Registration successful:", response);
      navigate("/store"); // Redirige al usuario a la página de la tienda
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Registration failed. Please try again.");
      setIsClicked(false); // Restablece el estado del botón
    }
  };

  return (
    <div className="wrapper-register">
      <header>
        <Header />
      </header>

      <main className="mobilelayout">
        <article>Sign up</article>
        <div className="inputbox">
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span>Username</span>
          <i></i>
        </div>
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
            Do you have <br />
            an account?
          </p>
          <button className="registro" onClick={() => navigate("/")}>
            Log in
          </button>
        </div>

        <button className="btn" onClick={handleRegister} disabled={isClicked}>
          <span className={isClicked ? "btn-text-two" : "btn-text-one"}>
            {isClicked ? "Great!" : "Get in!"}
          </span>
        </button>
      </main>

      <footer></footer>
    </div>
  );
};

export default Register;