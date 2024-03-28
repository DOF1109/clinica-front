import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/ContextProvider";
import { getDentist } from "../api/dentist";

const Card = ({ id }) => {
  const { dispatch } = useContextGlobal();
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
    alert(dentist.name + " agregado a favoritos");
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
      </Link>
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;
