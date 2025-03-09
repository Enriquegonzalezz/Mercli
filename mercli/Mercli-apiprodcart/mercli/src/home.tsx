import { BrowserRouter, Route, Routes } from "react-router-dom"
import Store from "./Store"
import Cash from "./Cashregister"
import Profile from "./Profile"
import Carrito from "./Carrito"
import Searching from "./Searching"
import ViewProduct from "./ViewProduct"
import Login from "./Login"
import Register from "./Register"
import Busqueda from "./busqueda"



function Home(){
    return (
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/store" element={<Store/>} />
            <Route path="/search" element={<Searching />}/>
            <Route path="/cash" element={<ViewProduct />}/>
            <Route path="/cashregister" element={<Cash />}/>
            <Route path="/profile" element = {<Profile />} />
            <Route path="/carrito" element = {<Carrito />}/>
            <Route path="/search" element = {<Busqueda />}/>
         </Routes>
       </BrowserRouter>
    )
}

export default Home