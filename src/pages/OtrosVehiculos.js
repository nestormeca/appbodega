import React, { useState } from "react";

import { TablaCargaCombustible } from "../components/TablaCargaCombustible";
import { Imputs } from "../components/Imputs";

const OtrosVehiculos = () => {
  const [equipo, setEquipo] = useState("Elegie Equipo...");

  return (
    <div className="container mt-5">
      <select
        id="equipo"
        value={equipo}
        onChange={(e) => {
          const selectedEquipo = e.target.value;
          setEquipo(selectedEquipo);
        }}
      >
        <option value="equipo" selected disabled hidden>
          Selecciona un Equipo
        </option>
        <option value="calefactores">Calefactores</option>
        <option value="mercedes_byrs-78">Mercedes BYRS-78</option>
        <option value="mercedes_psjk-46">Mercedes PSJK-46</option>
        <option value="volvo">VOLVO</option>
        <option value="kia">KIA GGYH-91</option>
        <option value="bidones">Bidones Porteria</option>
        <option value="nissanRL">NP-300 R.L</option>
        <option value="nissanJH">NP-300 J.H</option>
        <option value="ssangyongNM">SsangYong CCWD-82</option>
        <option value="ssangyongBRI">SsangYong Brigada</option>
        <option value="hyundai">Hyundai LJDX-25</option>
        <option value="hylux">Hylux E-C</option>
      </select>
      <Imputs equipo={"otrosvehiculos"} desc={`${equipo}`} />
      <TablaCargaCombustible props={"otrosvehiculos"} equipo={"otros"} />
    </div>
  );
};

export default OtrosVehiculos;
