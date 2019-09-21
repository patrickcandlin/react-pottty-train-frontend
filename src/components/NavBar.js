import React from "react";
import carphoto from "./images/IMG_1085.jpg"


export default function NavBar(){
    return (
        <nav className="navbar">
          <h1>#2 Doo List <span role='img-potty'>🚽</span></h1>
          <img src={carphoto} width="50" height="50" alt="cute-car-kids" />
        </nav>
    )
}