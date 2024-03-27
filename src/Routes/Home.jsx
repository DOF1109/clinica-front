import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { useContextGlobal } from "../Components/utils/ContextProvider";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [dentists, setDentists] = useState();
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useContextGlobal();

  const fetchData = async () => {
    try {
      const resp = await axios(url);
      console.log(resp.data);
      setDentists(resp.data);
      dispatch({ type: "SET_DATA", payload: resp.data });
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Error al cargar los datos. Intente nuevamente");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {loading ? (
          <p>Cargando...</p>
        ) : (
          dentists.map((dentist) => (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default Home;
