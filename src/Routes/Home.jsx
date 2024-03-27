import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/ContextProvider";
import { getDentists } from "../api/dentist";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState();
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useContextGlobal();

  const getData = async () => {
    try {
      const data = await getDentists();
      setDentists(data);
      dispatch({ type: "SET_DATA", payload: data });
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Error al cargar los datos. Intente nuevamente");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          dentists.map((dentist) => <Card key={dentist.id} id={dentist.id} />)
        )}
      </div>
    </main>
  );
};

export default Home;
