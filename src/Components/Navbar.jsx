import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/ContextProvider";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch} = useContextGlobal()

  return (
    <nav>
      <img src="./images/DH.ico" alt="Logo DH" />
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button onClick={() => dispatch( {type: "CHANGE_THEME"} )}>Change theme</button>
      </ul>
    </nav>
  );
};

export default Navbar;
