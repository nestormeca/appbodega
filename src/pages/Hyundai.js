import React from "react";
import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { TablaCargaCombustible } from "../components/TablaCargaCombustible";

import { getDate, getMonth, cargaDB } from "../components/Fecha";

const Hyundai = () => {
  const [data, setData] = useState({});

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    const grua = e.target.grua;
    setData({ ...data, [id]: value, grua });
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      await setDoc(doc(cargaDB, "hyundai", `${getMonth()}`, `${getDate()}`), {
        contador: `${data.contador}`,
        horometro: `${data.horometro}`,
        litros: `${data.litros}`,
        fecha: getDate(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="container w-50 mt-5 justify-content-center">
        <div className="row align-items-center">
          <h4 className="col">Grua Hynudai</h4>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            Horometro:
          </span>
          <input
            className="form-control"
            id="horometro"
            label="horometro"
            type="number"
            placeholder="Horometro"
            onChange={handleInput}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            Litros Cargados:
          </span>
          <input
            className="form-control"
            id="litros"
            label="litros"
            type="number"
            placeholder="Litros Cargados"
            onChange={handleInput}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            Contador:
          </span>
          <input
            className="form-control"
            id="contador"
            label="contador"
            type="number"
            placeholder="Contador"
            onChange={handleInput}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mb-3 align-self-center"
          onClick={handleAdd}
        >
          Carga Combustible
        </button>
      </form>
      <TablaCargaCombustible props={"hyundai"} />
    </>
  );
};

export default Hyundai;
