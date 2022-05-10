import React from "react";

import { TablaCargaCombustible } from "../../../components/TablaCargaCombustible";
import { Imputs } from "../../../components/Imputs";

const BidonesPorteria = () => {
  return (
    <div className="container mt-5">
      <Imputs equipo={"bidonesporteria"} desc={"Bidones Porteria"} />
      <TablaCargaCombustible
        props={"bidonesporteria"}
        equipo={"bidonesporteria"}
      />
    </div>
  );
};

export default BidonesPorteria;
