import React from "react";

import { TablaCargaCombustible } from "../../../components/TablaCargaCombustible";
import { Imputs } from "../../../components/Imputs";

const CamionHyundai = () => {
  return (
    <div className="container mt-5">
      <Imputs equipo={"camionHyundai"} desc={"Camion Hyundai"} />
      <TablaCargaCombustible props={"camionHyundai"} equipo={"camionHyundai"} />
    </div>
  );
};

export default CamionHyundai;
