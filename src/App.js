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

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="cargacombustible/equipos" element={<Equipos />} />
          <Route path="cargacombustible" element={<CargaCombustible />} />
          <Route
            path="cargacombustible/equipos/komatsu"
            element={<Komatsu />}
          />
          <Route path="cargacombustible/equipos/hyster" element={<Hyster />} />
          <Route
            path="cargacombustible/equipos/hyundai"
            element={<Hyundai />}
          />
          <Route
            path="cargacombustible/equipos/grupoelectrogeno"
            element={
              <GrupoElectrogeno options={options} cargaInputs={cargaInputs} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
