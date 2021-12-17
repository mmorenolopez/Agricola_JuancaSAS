import React, { Component } from 'react'
import background from './regforms/images/bg-registration-form-2.jpg';

export default class RegistroComponent extends Component {
  render() {
    return (
      <div>
        <div class="wrapper" style={{ backgroundImage: `url(${background})` }}>
          <div class="inner">
            <form action="">
              <h3>Formulario Registro</h3>
              <div class="form-group">
                <div class="form-wrapper">
                  <label for="">Latitud del predio</label>
                  <input type="number" class="form-control" />
                </div>
                <div class="form-wrapper">
                  <label for="">Longitud del predio</label>
                  <input type="number" class="form-control" />
                </div>
              </div>
              <div class="form-wrapper">
                <label for="">Área Total en Hectareas</label>
                <input type="number" class="form-control" />
              </div>
              <div class="form-wrapper">
                <label for="">Código Único ID Predio</label>
                <input type="number" class="form-control" />
              </div>
              <div class="form-wrapper">
                <label for="">Confirm Password</label>
                <input type="password" class="form-control" />
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" /> I caccept the Terms of Use & Privacy Policy.
                  <span class="checkmark"></span>
                </label>
              </div> 
              <button>Registrar Predio</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
