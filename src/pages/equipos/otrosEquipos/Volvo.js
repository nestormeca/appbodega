import React from "react";

import { TablaCargaCombustible } from "../../../components/TablaCargaCombustible";
import { Imputs } from "../../../components/Imputs";

const Volvo = () => {
  return (
    <div className="container mt-5">
      <Imputs equipo={"volvo"} desc={"Camion Volvo"} />
      <TablaCargaCombustible props={"volvo"} equipo={"volvo"} />
    </div>
  );
};

export default Volvo;
