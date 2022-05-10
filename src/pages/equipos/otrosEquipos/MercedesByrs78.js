import React from "react";

import { TablaCargaCombustible } from "../../../components/TablaCargaCombustible";
import { Imputs } from "../../../components/Imputs";

const MercedesByrs78 = () => {
  return (
    <div className="container mt-5">
      <Imputs equipo={"mercedes_byrs_78"} desc={"Camion Mercedez BYRS-78"} />
      <TablaCargaCombustible
        props={"mercedes_byrs_78"}
        equipo={"mercedes_byrs_78"}
      />
    </div>
  );
};

export default MercedesByrs78;
