// import 'https://kit.fontawesome.com/a076d05399.js';
import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import './navbar/style.css';

function Header() {
  return (
    <>
      <Helmet>
        <script src="./navbar/a076d05399.js" type="text/javascript" />
      </Helmet>

      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <Link to="/home">
          <label class="logo">JUANCA</label>
        </Link>
        <ul>
          {/* <li>
            <Link to="/home">Inicio</Link>
          </li> */}
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registro">Registro</Link>
          </li>
          <li>
            <Link to="/asignacion">Asigna</Link>
          </li>
          <li>
            <Link to="/tipo-cultivo">Cultivo</Link>
          </li>
          <li>
            <Link to="/parametros">Parámetros</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
