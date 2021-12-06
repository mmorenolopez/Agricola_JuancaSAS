// import 'https://kit.fontawesome.com/a076d05399.js';
import React from 'react';
import { NavLink } from 'react-router-dom';
import header_style from './navbar/style.css';

function Header() {
  return (
    <>
      <div className={header_style}>
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
          </label>
          <NavLink to="/home">
            <label class="logo">JUANCA</label>
          </NavLink>
          <ul>
            {/* <li>
            <Link to="/home">Inicio</Link>
          </li> */}
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/registro">Registro</NavLink>
            </li>
            <li>
              <NavLink to="/asignacion">Asigna</NavLink>
            </li>
            <li>
              <NavLink to="/tipo-cultivo">Cultivo</NavLink>
            </li>
            <li>
              <NavLink to="/parametros">Parámetros</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
