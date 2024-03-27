import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/ContextProvider";
import { getDentist } from "../api/dentist";

const Card = ({ id }) => {
  const { state, dispatch } = useContextGlobal();
  const [dentist, setDentist] = useState();

  const getData = async () => {
    try {
      const data = await getDentist(id);
      setDentist(data);
    } catch (error) {
      console.log(error);
      alert("Error al cargar los datos. Intente nuevamente");
    }
  };

  useEffect(() => {
    getData();
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
