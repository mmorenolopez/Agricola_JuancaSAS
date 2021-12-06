// import 'https://kit.fontawesome.com/a076d05399.js';
import React from 'react';
import { Link } from 'react-router-dom';
import header_style from './navbar/style.css';

function Header() {
  return (
    <>
      <div className={header_style.header}>
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
      </div>
    </>
  );
}

export default Header;
