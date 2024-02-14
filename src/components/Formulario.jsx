/* eslint-disable react/no-unescaped-entities */
import "./Formulario.css";

const formulario = () => {
  return (
    <form className='formulario'>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Email address
        </label>
        <input
          type='email'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='inquietudes' className='form-label'>
          Inquietudes
        </label>
        <textarea className='form-control' id='inquietudes' rows='4'></textarea>
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default formulario;
