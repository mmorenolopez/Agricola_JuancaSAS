import React from 'react';
import background from './regforms/images/bg-registration-form-2.jpg';

function Parametros() {
  return (
    <div class="wrapper" style={{ backgroundImage: `url(${background})` }}>
      <div class="inner">
        <form action="">
          <h3>Formulario Parámetros</h3>
          <div class="form-group">
            <div class="form-wrapper">
              <label for="">Valor Metro Cúbico</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-wrapper">
              <label for="">Código Semilla</label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <div class="form-group">
            <div class="form-wrapper">
              <label for="">Valor Código Semilla</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-wrapper">
              <label for="">Nombre Cultivo</label>
              <input type="number" class="form-control" />
            </div>
          </div>

          <div class="form-wrapper">
            <label for="">Valor Fertilizantes Kg</label>
            <input type="number" class="form-control" />
          </div>

          <button>Guardar Parámetros</button>
        </form>
      </div>
    </div>
  );
}

export default Parametros;
