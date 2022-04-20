import React from "react";
import { Link } from "react-router-dom";

const Equipos = () => {
  return (
    <div className="container mt-5">
      <div className="">
        <h3>Carga de Combustibles</h3>
        <hr />
        <h4 className="mb-3">Equipos</h4>
        <div className="d-flex  justify-content-between">
          <Link className="p-3 border bg-light text-center" to="komatsu">
            Grua Komatsu
          </Link>
          <Link className="p-3 border bg-light text-center" to="hyundai">
            Grua Hyundai
          </Link>
          <Link className="p-3 border bg-light text-center" to="hyster">
            Grua Hyster
          </Link>
          <Link
            className="p-3 border bg-light text-center"
            to="grupoelectrogeno"
          >
            Grupo Electrogeno
          </Link>
          <Link
            className="p-3 border bg-light text-center"
            to="grupoelectrogeno"
          >
            Otros Vehiculos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Equipos;
