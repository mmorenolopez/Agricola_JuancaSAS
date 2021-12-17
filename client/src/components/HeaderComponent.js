import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
          <div className="container-fluid">
            <NavLink className="navbar-brand text-white" to='/home'>
              Agricola Juanca S.A.S
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className="nav-link active text-white" to="/login" >Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/registro" >Registro</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/asignacion" >Asignacion</NavLink>
                </li>                               
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/tipo-cultivo" >Cultivos</NavLink>                               
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/parametros" >Parametros</NavLink>                               
                </li>
              </ul>
          </div>
        </nav>
      </div>
    )
  }
}

