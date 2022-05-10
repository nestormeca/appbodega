import React from "react";

import { TablaCargaCombustible } from "../../components/TablaCargaCombustible";
import { Imputs } from "../../components/Imputs";

const Hyundai = () => {
  return (
    <div className="container mt-5">
      <Imputs equipo={"hyundai"} desc={"Hynudai 33DT-7"} />
      <TablaCargaCombustible props={"hyundai"} equipo={"hyundai"} />
    </div>
  );
};

export default Hyundai;
