import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import style_main from './login_resources/css/main.css';
import style_util from './login_resources/css/util.css';
import logo from './login_resources/images/logo.jpeg';
import style_animate from './login_resources/vendor/animate/animate.css';
import style_hamburgers from './login_resources/vendor/css-hamburgers/hamburgers.min.css';
import style_select2 from './login_resources/vendor/select2/select2.min.css';

function Login() {
  const scale = useState(1.15);
  return (
    <>
      <Helmet>
        {/* -Login- */}
        <script src="login_resources/vendor/jquery/jquery-3.2.1.min.js"></script>
        <script src="login_resources/vendor/bootstrap/js/popper.js"></script>
        <script src="login_resources/vendor/bootstrap/js/bootstrap.min.js"></script>
        <script src="login_resources/vendor/select2/select2.min.js"></script>
        <script src="login_resources/js/main.js"></script>
      </Helmet>

      <div class={style_main}>
        <div class={style_util}>
          <div class={style_animate}>
            <div class={style_hamburgers}>
              <div class={style_select2}>
                <div class="limiter">
                  <div class="container-login100">
                    <div class="wrap-login100">
                      <div class="login100-pic">
                        <Tilt scale={scale} transitionSpeed={2500}>
                          <img src={logo} alt="Logo JuancaSAS" />
                        </Tilt>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
