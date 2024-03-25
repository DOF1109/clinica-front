import React from "react";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img 
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.es%2Ficono-gratis%2Fusuario_747545&psig=AOvVaw16l6wBK78wGQ5SbxfI7ZVX&ust=1711479366226000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMDyidmLkIUDFQAAAAAdAAAAABAE" 
          alt="Foto de perfil"
          width={100} />
        
        <p>{name}</p>

        <p>{id} - {username}</p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
