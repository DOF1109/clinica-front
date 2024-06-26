import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDentist } from "../api/dentist";

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState();

  const getData = async () => {
    try {
      const data = await getDentist(id);
      setDentist(data);
    } catch (error) {
      console.log(error);
      alert("Error al cargar los datos. Intente nuevamente");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ margin: "auto" }}>
      {dentist ? (
        <>
          <h1>Detail Dentist {dentist.id}</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dentist.name}</td>
                <td>{dentist.email}</td>
                <td>{dentist.phone}</td>
                <td>{dentist.website}</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Detail;
