import "./UpdateProduct.css"
import { Link } from "react-router-dom";

const UpdateProduct = () => {
  return (
    <div className="form-container">
      <h1>Edit Publication</h1>
      <form>
        <div className="formGroup">
          <label>
            Name:
            <input
              type="text"
              name="name"
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
            Descripction:
            <input
              type="text"
              name="descripcion"
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
            URL img:
            <input
              type="text"
              name="imgURL"
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
            Feelings:
            <input
              type="text"
              name="feelingsaspect"
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
            Negatives:
            <input
              type="text"
              name="negativesaspect"
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
            Help with:
            <input
              type="text"
              name="helpwith"
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
            Price:
            <input
              type="number"
              name="p_precio"
            />
          </label>
        </div>
        <div className="formGroup">
          <label>
            Discount Price:
            <input
              type="number"
              name="p_descuento"
            />
          </label>
        </div>
        {/* Agrega otros campos según tu estructura de datos */}
        <div className="formGroup">
          <button type="button">
            Save Changes
          </button>
          <button id="btn2" type="button">
        <Link to='/dashboard' className="link-button">
            Volver a Dashboard </Link>
          </button>
        </div>
        
      </form>
    </div>
  );
};


export default UpdateProduct;
