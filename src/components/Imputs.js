import React from "react";
import { useState } from "react";
import { setDoc, doc } from "firebase/firestore";

import { getDate, getMonth, cargaDB, getMonth2 } from "../components/Fecha";

export const Imputs = ({ equipo, desc }) => {
  const [data, setData] = useState({});

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    //const grua = e.target.grua;
    setData({ ...data, [id]: value });
    //console.log(grua);
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      await setDoc(
        doc(cargaDB, `${equipo}`, `${getMonth()}`, `${getMonth2()}`),
        {
          contador: `${data.contador}`,
          horometro: `${data.horometro}`,
          litros: parseInt(`${data.litros}`),
          equipo: `${desc}`,
          fecha: getDate(),
          mes: getMonth(),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="container w-50 mt-3 justify-content-center">
        {/* <div className="row align-items-center">
          <h4 className="col">{desc}</h4>
        </div> */}
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
          Cargar Combustible
        </button>
      </form>
    </>
  );
};
