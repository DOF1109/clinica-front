import { createContext, useContext, useEffect, useReducer } from "react";

const localStorageFavs = JSON.parse(localStorage.getItem("favs"));

const initialState = {
  darkMode: false,
  data: [],
  favs: localStorageFavs || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, darkMode: !state.darkMode };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "ADD_FAV":
      localStorage.setItem(
        "favs",
        JSON.stringify([...state.favs, action.payload])
      );
      return { ...state, favs: [...state.favs, action.payload] };
    default:
      return state;
  }
};

const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
