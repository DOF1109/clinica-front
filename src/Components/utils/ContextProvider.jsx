import { createContext, useContext, useReducer } from "react";

const initialState = {
  darkMode: false,
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, darkMode: !state.darkMode };
    case "SET_DATA":
      return { ...state, data: action.payload };
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
