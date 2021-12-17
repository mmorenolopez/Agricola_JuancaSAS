import React, { Component } from 'react'
import imagen1 from './regforms/images/agr.jpeg'
import { Link } from 'react-router-dom'

export default class HomeComponents extends Component {
  render() {
    return (
      <div className="limiter">
        <div className="container-fluid bg-light">
          <div className="row justify-content-center">
            <div className="col-auto"></div>
            <div className="card my-5 col-6">
              <img
                src={imagen1}
                className="card-img-top"
                alt="Fissure in Sandstone"
              />
              <div className="card-body">
                <h5 className="card-title"><strong>+CampoAgricola</strong></h5>
                <p className="lead">
                  La riqueza de un país debe aumentar de modo uniforme, y de tal manera que otras fuentes de riqueza no sobrepasasen a la agricultura. <p><em> León Tolstói (1875)</em></p>
                </p>
                <Link className="btn btn-success" to='/login'>
                  Login
                </Link>
              </div>
            </div>
            <div className="col-auto"></div>
          </div>
        </div>
      </div>
    )
  }
}
