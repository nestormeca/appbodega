import React from "react";

import { TablaCargaCombustible } from "../../../components/TablaCargaCombustible";
import { Imputs } from "../../../components/Imputs";

const MercedesPsjk46 = () => {
  return (
    <div className="container mt-5">
      <Imputs equipo={"mercedes_psjk_46"} desc={"Camion Mercedes PSJK-46"} />
      <TablaCargaCombustible
        props={"mercedes_psjk_46"}
        equipo={"mercedes_psjk_46"}
      />
    </div>
  );
};

export default MercedesPsjk46;
