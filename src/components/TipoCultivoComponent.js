import React from 'react';
import style from './regforms/css/style.css';
import background from './regforms/images/bg-registration-form-2.jpg';

function TipoCultivo() {
  return (
    <div class={style}>
      <div class="wrapper" style={{ backgroundImage: `url(${background})` }}>
        <div class="inner">
          <form action="">
            <h3>Formulario Tipo Cultivo</h3>
            <div class="form-group">
              <div class="form-wrapper">
                <label for="">Especie Cultivada</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-wrapper">
                <label for="">Nombre Cultivo</label>
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="form-group">
              <div class="form-wrapper">
                <label for="">Estación Año</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-wrapper">
                <label for="">Código Semilla</label>
                <input type="number" class="form-control" />
              </div>
            </div>

            <div class="form-wrapper">
              <label for="">Descripción Cultivo</label>
              <textarea type="text" class="form-control"></textarea>
            </div>

            <button>Crear Cultivo</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TipoCultivo;
