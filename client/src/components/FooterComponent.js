import React from 'react';
import footer_style from './footer_assets/css/style.css';

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <div class={footer_style}>
        <footer>
          <div class="footer-top">
            <div class="container">
              <div class="row">
                <div class="col-md-3 footer-about wow fadeInUp">
                  <h3>Sobre Cultivos</h3>
                  <p>
                    Con esta aplicación puedes hacer el seguimiento de todas tus cosechas, desde la siembra de la
                    semillas hasta el dia de la recolección.
                  </p>
                  <p>&copy; JUANCA S.A.S.</p>
                </div>
                <div class="col-md-4 offset-md-1 footer-contact wow fadeInDown">
                  <h3>Contáctanos</h3>
                  <p>
                    <i class="fas fa-map-marker-alt"></i> Carrera 13 # 30A - 45 Bogotá Colombia
                  </p>
                  <p>
                    <i class="fas fa-phone"></i> Telefono: (601) 2 68 33 47
                  </p>
                  <p>
                    <i class="fas fa-envelope"></i> Email:{' '}
                    <a href="mailto:soporte@juancasas.com">soporte@juancasas.com</a>
                  </p>
                  <p>
                    <i class="fab fa-skype"></i> Skype: juancasas
                  </p>
                </div>
                <div class="col-md-4 footer-links wow fadeInUp">
                  <div class="row">
                    <div class="col">
                      <h3>Links</h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <p>
                        <a class="scroll-link" href="#top-content">
                          Inicio
                        </a>
                      </p>
                      <p>
                        <a href="/home">Registrar Usuario</a>
                      </p>
                      <p>
                        <a href="/home">Recuperar Contraseña</a>
                      </p>
                      <p>
                        <a href="/home">Nuestro Clientes</a>
                      </p>
                    </div>
                    <div class="col-md-6">
                      <p>
                        <a href="/home">Precio &amp; planes</a>
                      </p>
                      <p>
                        <a href="/home">Afiliados</a>
                      </p>
                      <p>
                        <a href="/home">Terminos y Condiciones</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="container">
              <div class="row">
                <div class="col footer-social">
                  <a href="/home">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="/home">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="/home">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                  <a href="/home">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="/home">
                    <i class="fab fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
