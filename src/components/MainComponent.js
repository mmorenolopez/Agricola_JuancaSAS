import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Asignacion from './AsignacionComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Login from './LoginComponent';
import Parametros from './ParametrosComponent';
import ParametrosCultivar from './ParametrosCultivarComponent';
import Programacion from './ProgramacionComponent';
import Registro from './RegistroComponent';
import RestoreLogin from './RestoreLoginComponent';
import TipoCultivo from './TipoCultivoComponent';

function Main() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/restore-login" element={<RestoreLogin />} />
        <Route path="/asignacion" element={<Asignacion />} />
        <Route path="/parametros" element={<Parametros />} />
        <Route path="/parametros-cultivar" element={<ParametrosCultivar />} />
        <Route path="/programacion" element={<Programacion />} />
        <Route path="/tipo-cultivo" element={<TipoCultivo />} />
      </Routes>

      <Navigate to="/home" replace={true} />

      <Footer />
    </React.Fragment>
  );
}

export default Main;
