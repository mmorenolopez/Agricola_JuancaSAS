import React from 'react';
import style from './regforms/css/style.css';
import background from './regforms/images/bg-registration-form-2.jpg';

function Asignacion() {
  return (
    <>
      <div class={style}>
        <div class="wrapper" style={{ backgroundImage: `url(${background})` }}>
          <div class="inner">
            <form class="form-register" action="">
              <h3>Formulario Asignación</h3>
              <div class="form-group">
                <div class="form-wrapper">
                  <label for="">Usuario Gestión</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-wrapper">
                  <label for="">Nombre Usuario</label>
                  <input type="text" class="form-control" />
                </div>
              </div>

              <div class="form-wrapper">
                <label for="">CUP</label>
                <input type="number" class="form-control" />
              </div>
              <div class="form-wrapper">
                <label for="">Información CUP</label>
                <textarea type="text" class="form-control"></textarea>
              </div>

              <button>Asignar Predio</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Asignacion;
