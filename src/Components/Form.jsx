import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [pacient, setPacient] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      pacient.length >= 3 &&
      pacient.email.includes(" ") &&
      regex.test(pacient.email) &&
      pacient.password.length >= 6 &&
      pacient.password.includes(" ")
    ) {
      setShow(true);
      setErr(false);
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>E-mail</label>
          <input
            type="text"
            onBlur={(event) =>
              setPacient({ ...pacient, name: event.target.value })
            }
          />
          <label>Password</label>
          <input
            type="text"
            onBlur={(event) =>
              setPacient({ ...pacient, email: event.target.value })
            }
          />
          <button>Enviar</button>
        </form>
        {show ? (
          <>
            <h4>Bienvenido!</h4>
          </>
        ) : (
          <p>Coloque sus email y password para ingresar</p>
        )}
        {err ? <p>Debe colocar sus datos correctamente</p> : null}
      </div>
    );
  };
};

export default Form;
