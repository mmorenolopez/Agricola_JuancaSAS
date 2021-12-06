import '.login_resources/css/main.css';
import '.login_resources/css/util.css';
import '.login_resources/vendor/animate/animate.css';
import '.login_resources/vendor/css-hamburgers/hamburgers.min.css';
import '.login_resources/vendor/select2/select2.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <div class="login100-pic js-tilt" data-tilt>
            <img src="login_resources/images/logo.jpeg" alt="IMG" />
          </div>

          <form class="login100-form validate-form">
            <span class="login100-form-title"> Cultivos Agrícolas </span>
            <span class="login100-form-title"> JUANCA S.A.S </span>

            <div class="wrap-input100 validate-input" data-validate="Usuario valido es obligatorio">
              <input class="input100" type="text" name="usuario" placeholder="Usuario" />
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div class="wrap-input100 validate-input" data-validate="Password is required">
              <input class="input100" type="password" name="pass" placeholder="Contraseña" />
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <i class="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div class="container-login100-form-btn">
              <button class="login100-form-btn">Ingresar</button>
            </div>

            <div class="text-center p-t-12">
              <span class="txt1"> Si olvidó su contraseña </span>
              <Link to="/restore-login">click AQUI</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
