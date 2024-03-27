import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import ContextProvider from "./Components/utils/ContextProvider";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>

          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
