import './InputGroup.scss'

const InputGroup = ({ label, id, name, type, placeholder, register, error }) => {
    return (
      <div className="mb-3">
        <label htmlFor={id} className="form-labelform-container">
          {label}
        </label>
        <input
          type={type}
          className={`form-control  ${error ? "is-invalid" : ""}`}
          id={id}
          placeholder={placeholder}
          autoComplete="off"
          {...register(id)}
        />
        <p className="invalid-feedback">{error}</p>
      </div>
    );
  }
  
  InputGroup.defaultProps = {
    type: 'text'
  }
  
  export default InputGroup