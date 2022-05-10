import React from "react";
import { Link } from "react-router-dom";

const Equipos = () => {
  return (
    <div className="container mt-5">
      <div className="">
        <h4 className="mb-3">Equipos</h4>
        <div className="d-flex  justify-content-between">
          <Link
            className="p-3 border bg-light text-center"
            to="mercedes_byrs_78"
          >
            Camion Mercedez BYRS-78
          </Link>
          <Link
            className="p-3 border bg-light text-center"
            to="mercedes_psjk_46"
          >
            Camion Mercedes PSJK-46
          </Link>
          <Link className="p-3 border bg-light text-center" to="volvo">
            Camion Volvo
          </Link>
          <Link className="p-3 border bg-light text-center" to="camionetakia">
            Camioneta Kia
          </Link>
          <Link className="p-3 border bg-light text-center" to="camionHyundai">
            Camion Hyundai
          </Link>
          <Link
            className="p-3 border bg-light text-center"
            to="bidonesporteria"
          >
            Bidones Porteria
          </Link>
          <Link className="p-3 border bg-light text-center" to="otrosVehiculo">
            Otros Vehiculos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Equipos;
