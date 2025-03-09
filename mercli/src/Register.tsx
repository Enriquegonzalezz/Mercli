import React from "react";
import Header from "./componentes/Header";
import "./index.css"

import { useNavigate } from "react-router-dom";
import { useState } from "react";



const Register:React.FC = () => {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();
  
    const handleClick = () => {
      setIsClicked(true);
  
      //una promesa que se resuelve después de 2 segundos
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1500);
      }).then(() => {
        navigate('/store');
      });
    };
  
    return (
    
        <div className="wrapper-register">
           
            <header><Header/></header>

            <main className="mobilelayout">
                <article>Sign up</article>
            <div className="inputbox">
                <input type="password" required/>
                <span>Username</span>
                <i></i>
            </div>
            <div className="inputbox">
                <input type="text" required/>
                <span>Email</span>
                <i></i>
            </div>
            <div className="inputbox">
                <input type="password" required/>
                <span>Password</span>
                <i></i>
            </div>
           

            <div className="gotoreg">
                <p>Do you have <br />an account?</p>
                <button className="registro" onClick={()=>{navigate("/")}}>Log in</button>
            </div>

            <button className="btn" onClick={handleClick}>
            <span className={isClicked ? 'btn-text-two' : 'btn-text-one'}>
        {isClicked ? 'Great!' : 'Get in!'}</span>
            </button>

           

            </main>


            <footer></footer>

        </div>
    )
}

export default Register