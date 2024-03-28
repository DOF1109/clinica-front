import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/ContextProvider";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useContextGlobal();

  return (
    <div style={{ margin: "auto" }}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((dentist) => (
          <Card key={dentist.id} id={dentist.id} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
