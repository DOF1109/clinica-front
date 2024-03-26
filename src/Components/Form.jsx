import React, { useState } from "react";

const Form = () => {
  const [pacient, setPacient] = useState({
    name: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      pacient.email.trim() &&
      pacient.name.trim() &&
      regex.test(pacient.email) &&
      pacient.name.length > 5 &&
      !pacient.email.includes(" ") &&
      !pacient.name.includes(" ")
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
    console.log(name);
    setPacient({ ...pacient, [name]: value });
    console.log(pacient.name);
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
        <label>Name</label>
        <input
          type="name"
          name="name"
          value={pacient.name}
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
      {show && <h4>Gracias {pacient.name}, te contactaremos cuando antes vía mail</h4>}
      {err && <p>Por favor verifique su información nuevamente</p>}
    </div>
  );
};

export default Form;
