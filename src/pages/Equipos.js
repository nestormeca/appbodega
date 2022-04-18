import React from "react";
import { Link } from "react-router-dom";

const Equipos = () => {
  return (
    <div className="container mt-5">
      <div className="row g-2">
        <h1>Equipos</h1>
        <div className="col-4">
          <Link className="p-3 border bg-light text-center" to="komatsu">
            Grua Komatsu
          </Link>
        </div>
        <div className="col-4">
          <Link className="p-3 border bg-light text-center" to="hyundai">
            Grua Hyundai
          </Link>
        </div>
        <div className="col-4">
          <Link className="p-3 border bg-light text-center" to="hyster">
            Grua Hyster
          </Link>
        </div>
        <div className="col-4">
          <Link
            className="p-3 border bg-light text-center"
            to="grupoelectrogeno"
          >
            Grupo Electrogeno
          </Link>
        </div>
        <div className="col-4">
          <div className="p-3 border bg-light text-center">
            Grupo Electrogeno
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipos;
