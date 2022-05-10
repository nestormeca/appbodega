import React from "react";

import { TablaCargaCombustible } from "../../../components/TablaCargaCombustible";
import { Imputs } from "../../../components/Imputs";

const Komatsu = () => {
  return (
    <div className="container mt-5">
      <Imputs equipo={"calefactores"} desc={"Calefactores"} />
      <TablaCargaCombustible props={"calefactores"} equipo={"calefactores"} />
    </div>
  );
};

export default Komatsu;
