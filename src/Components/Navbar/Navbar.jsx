import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../utils/ContextProvider";
import "./Navbar.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();

  return (
    <nav>
      <img className="nav__logo" src="./DH.ico" alt="Logo DH" />
      <ul>
        <Link className="nav__item" to="/">Home</Link>
        <Link className="nav__item" to="/contact">Contact</Link>
        <Link className="nav__item" to="/favs">Favs</Link>
        <button
          className="nav__btn"
          onClick={() => dispatch({ type: "CHANGE_THEME" })}
        >
          Change theme
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
