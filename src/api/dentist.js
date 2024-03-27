import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users/";

// Todos los dentistas
export const getDentists = async () => {
  try {
    const resp = await axios(url);
    return resp.data;
  } catch (error) {
    console.log(error);
    alert("Error al cargar los datos. Intente nuevamente");
  }
};

// Un dentista
export const getDentist = async (id) => {
  try {
    const resp = await axios(url + id);
    return resp.data;
  } catch (error) {
    console.log(error);
    alert("Error al cargar los datos. Intente nuevamente");
  }
};
