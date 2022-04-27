import React from "react";

import { TablaCargaCombustible } from "../components/TablaCargaCombustible";
import { Imputs } from "../components/Imputs";

const GrupoElectrogeno = () => {
  return (
    <div className="container mt-5">
      <Imputs equipo={"grupoElectrogeno"} desc={"Grupo Electrogeno"} />
      <TablaCargaCombustible props={"grupoElectrogeno"} />
    </div>
  );
};

export default GrupoElectrogeno;
