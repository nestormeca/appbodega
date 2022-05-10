import React from "react";

import { TablaCargaCombustible } from "../../../components/TablaCargaCombustible";
import { Imputs } from "../../../components/Imputs";

const CamionetaKia = () => {
  return (
    <div className="container mt-5">
      <Imputs equipo={"camionetaKia"} desc={"Camioneta Kia"} />
      <TablaCargaCombustible props={"camionetaKia"} equipo={"camionetaKia"} />
    </div>
  );
};

export default CamionetaKia;
