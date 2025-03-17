
import Header from "./componentes/Header";
import "./index.css"

import { useNavigate } from "react-router-dom";
import { useState } from "react";



const Login:React.FC = () => {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();
  
    const handleClick = () => {
      setIsClicked(true);
  
      // Crear una promesa que se resuelve después de 2 segundos
      new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1500);
      }).then(() => {
        // Navegar a la página "/store" después de 2 segundos
        navigate('/store');
      });
    };
  
    return (
    
        <div className="wrapper-register">
           
            <header><Header/></header>

            <main className="mobilelayout">
                <article>Log in</article>
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
                <p>Don't have <br />an account?</p>
                <button className="registro" onClick={()=>{navigate("/Register")}}>Sign up</button>
            </div>

            <button className="btn" onClick={handleClick}>
            <span className={isClicked ? 'btn-text-two' : 'btn-text-one'}>
        {isClicked ? 'Great!' : 'Log in'}</span>
            </button>

           

            </main>


            <footer></footer>

        </div>
    )
}

export default Login