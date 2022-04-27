import React from "react";

import { TablaCargaCombustible } from "../components/TablaCargaCombustible";
import { Imputs } from "../components/Imputs";

const Hyundai = () => {
  return (
    <div className="container mt-5">
      <Imputs equipo={"hyundai"} desc={"Grua Hynudai 33DT-7"} />
      <TablaCargaCombustible props={"hyundai"} />
    </div>
  );
};

export default Hyundai;
