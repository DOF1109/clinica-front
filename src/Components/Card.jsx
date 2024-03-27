import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContextGlobal } from "./utils/ContextProvider";
import axios from "axios";

const Card = ({ id }) => {
  const url = "https://jsonplaceholder.typicode.com/users/";
  const { state, dispatch } = useContextGlobal();
  const [dentist, setDentist] = useState();

  const getDentist = async () => {
    try {
      const resp = await axios(url + id);
      setDentist(resp.data);
    } catch (error) {
      console.log(error);
      alert("Error al cargar los datos. Intente nuevamente");
    }
  };

  useEffect(() => {
    getDentist();
  }, []);

  const addFav = () => {
    dispatch({ type: "ADD_FAV", payload: dentist });
    alert(dentist.username + " agregado a favoritos");
  };

  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <img src="./images/doctor.jpg" alt="Foto de perfil" width={150} />

        {dentist ? (
          <>
            <h3>{dentist.name}</h3>
            <p>{dentist.username}</p>
          </>
        ) : (
          <p>"Cargando..."</p>
        )}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link>
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;
