import React, { useState } from "react";

const Form = () => {
  const [pacient, setPacient] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      pacient.email.trim() &&
      pacient.password.trim() &&
      regex.test(pacient.email) &&
      pacient.password.length >= 6 &&
      !pacient.email.includes(" ") &&
      !pacient.password.includes(" ")
    ) {
      setShow(true);
      setErr(false);
    } else {
      setShow(false);
      setErr(true);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPacient({ ...pacient, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input
          type="text"
          name="email"
          value={pacient.email}
          onChange={handleInputChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={pacient.password}
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
      {show ? (
        <h4>Bienvenido!</h4>
      ) : (
        <p>Coloque sus email y password para ingresar</p>
      )}
      {err && <p>Debe colocar sus datos correctamente</p>}
    </div>
  );
};

export default Form;
