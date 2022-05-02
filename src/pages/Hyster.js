import React from "react";

import { TablaCargaCombustible } from "../components/TablaCargaCombustible";
import { Imputs } from "../components/Imputs";

const Hyster = () => {
  return (
    <div className="container mt-5">
      <Imputs equipo={"hyster"} desc={"Hyster"} />
      <TablaCargaCombustible props={"hyster"} />
    </div>
  );
};

export default Hyster;
