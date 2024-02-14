import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FormContacto.css";

const FormContacto = () => {
    return (
        <div className="formulario">
        <form className="row g-3">
        <div className="maininfo">
            <h4>Comunicate con nosotros!</h4>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Nombre y Apellido</label>
          <input type="email" className="form-control" id="inputEmail4"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputPassword4"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Telefono</label>
          <input type="phone" className="form-control" id="inputPassword4"/>
        </div>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">Metodo de Contacto</label>
          <select id="inputState" className="form-select">
            <option selected>Opciones</option>
            <option>Telefono</option>
            <option>Correo</option>
            <option>Agendar una reunion con nuestro equipo</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">Area de Interes</label>
          <select id="inputState" className="form-select">
            <option selected>Negocios</option>
            <option>Flores</option>
            <option>Accesorios</option>
          </select>
        </div>
        <textarea className="form-control" placeholder="Deja un comentario o tu consulta" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">Ciudad</label>
          <input type="text" className="form-control" id="inputCity"/>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">Estado</label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>Arica y Parinacota</option>
            <option>Antofagasta</option>
            <option>Atacama</option>
            <option>Coquimbo</option>
            <option>Valparaíso</option>
            <option>Región Metropolitana de Santiago</option>
            <option>Libertador General Bernardo OHiggins</option>
            <option>Maule</option>
            <option>Ñuble</option>
            <option>Biobío</option>
            <option>La Araucanía</option>
            <option>Los Ríos</option>
            <option>Los Lagos</option>
            <option>Aysén del General Carlos Ibáñez del Campo</option>
            <option>Magallanes y de la Antártica Chilena</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">Zip</label>
          <input type="text" className="form-control" id="inputZip"/>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button id="btn" type="submit" className="btn btn-primary">Enviar</button>
        </div>
      </form>
      </div>
    );
  };
  
  export default FormContacto;
  