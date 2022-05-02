import React from "react";

import { TablaCargaCombustible } from "../components/TablaCargaCombustible";
import { Imputs } from "../components/Imputs";

const Komatsu = () => {
  return (
    <div className="container mt-5">
      <Imputs equipo={"komatsu"} desc={"Komatsu FD-135-8"} />
      <TablaCargaCombustible props={"komatsu"} equipo={"Komatsu FD-135-8"} />
    </div>
  );
};

export default Komatsu;
