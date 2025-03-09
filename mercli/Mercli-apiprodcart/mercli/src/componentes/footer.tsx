import React from "react";
import "./Footer.css"
import fotitostroe from "../assets/storetrue.svg"
import svgregister from  "../assets/cashregister.svg"
import svgprofile from  "../assets/profile.png"
import svgcarrito from  "../assets/carrito.png"
import setti from "../assets/settings.png"
import { useNavigate } from "react-router-dom";



const Footer: React.FC = () => {
    const Navigate = useNavigate();
     return (
     <div className="wrapperunico">
        <img src={fotitostroe} alt="" onClick={()=>{Navigate("/store")}} />
        <img src={svgregister}alt="" onClick={()=>{Navigate("/cashregister")}} />
        <img src={svgprofile} alt="" onClick={()=>{Navigate("/profile")}}/>
        <img src={svgcarrito} alt="" onClick={()=>{Navigate("/carrito")}}/>
    </div>)

}

export default Footer