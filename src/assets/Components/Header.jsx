import React from 'react';
import Logo from "../img/LogoCacharreria.png";          
import { Link } from 'react-router-dom';
import '../Css/HeaderStyle.css'


const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-section">

      </div>
       
      <div className="navbar-section links">
        <Link  to="/"><img className="Logo" src={Logo} alt="logo" /></Link>
        <Link className="" to="/productos">Productos</Link>
        <Link to="/sobre-nosotros">Nosotros</Link>
        <Link to="/contactanos">Contactanos</Link>
      </div>


      <div className="navbar-section">
        <div className="ui vertical animated button" tabIndex="0">
          <div className="hidden content">
            <Link to="/login">Acceder</Link>
          </div>
          <div className="visible content">
            <i className="user icon" to="/login"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
