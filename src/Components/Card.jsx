import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <Link to={`/detail/${id}`}>
      <div className="card">
          <img 
            src='./images/doctor.jpg'
            alt="Foto de perfil"
            width={150} />

          <h3>{name}</h3>

          <p>{id} - {username}</p>

          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

          {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <button onClick={addFav} className="favButton">⭐</button>
      </div>
    </Link>
  );
};

export default Card;
