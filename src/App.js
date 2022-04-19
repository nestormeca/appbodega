import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import CargaCombustible from "./pages/CargaCombustible";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { options, cargaInputs } from "./formcarga";
import Equipos from "./pages/Equipos";
import Komatsu from "./pages/Komatsu";
import Hyster from "./pages/Hyster";
import Hyundai from "./pages/Hyundai";
import GrupoElectrogeno from "./pages/GrupoElectrogeno";
import Bodega from "./pages/Bodega";
import Abastecimiento from "./pages/Abastecimiento";
import Mantencion from "./pages/Mantencion";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          // <RequireAuth>
          <Home />
          // </RequireAuth>
        }
      >
        <Route path="login" element={<Login />} />
        <Route path="bodega" element={<Bodega />} />
        <Route path="abastecimiento" element={<Abastecimiento />} />
        <Route path="mantencion" element={<Mantencion />} />
      </Route>
    </Routes>
  );
}

export default App;
