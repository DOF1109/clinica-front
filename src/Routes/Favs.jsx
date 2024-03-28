import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/ContextProvider";

const Favs = () => {
  const { state } = useContextGlobal();

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
