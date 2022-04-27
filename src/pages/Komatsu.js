import React from "react";

import { TablaCargaCombustible } from "../components/TablaCargaCombustible";
import { Imputs } from "../components/Imputs";

const Komatsu = () => {
  return (
    <div className="container mt-5">
      <Imputs equipo={"komatsu"} desc={"Grua Komatsu FD-135-8"} />
      <TablaCargaCombustible props={"komatsu"} />
    </div>
  );
};

export default Komatsu;
