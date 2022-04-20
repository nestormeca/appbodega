import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

import { Routes, Route } from "react-router-dom";
//import { AuthContext } from "./context/AuthContext";
//import { useContext } from "react";

import GrupoElectrogeno from "./pages/GrupoElectrogeno";
import Bodega from "./pages/Bodega";
import Abastecimiento from "./pages/Abastecimiento";
import Mantencion from "./pages/Mantencion";

function App() {
  //const { currentUser } = useContext(AuthContext);

  // const RequireAuth = ({ children }) => {
  //   return currentUser ? children : <Navigate to="/login" />;
  // };

  return (
    <Routes>
      <Route
        path="/"
        element={
          //<RequireAuth>
          <Home />
          //</RequireAuth>
        }
      >
        <Route path="login" element={<Login />} />
        <Route path="bodega" element={<Bodega />} />
        <Route path="bodega/grupoelectrogeno" element={<GrupoElectrogeno />} />

        <Route path="abastecimiento" element={<Abastecimiento />} />
        <Route path="mantencion" element={<Mantencion />} />
      </Route>
    </Routes>
  );
}

export default App;
