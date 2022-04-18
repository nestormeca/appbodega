import React from "react";
import { setDoc, doc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { TablaCargaCombustible } from "../components/TablaCargaCombustible";

const Hyundai = () => {
  const [data, setData] = useState({});

  const getFecha = () => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.toLocaleTimeString();

    if (month < 10) {
      return `${day}-0${month}-${year}-${hour}`;
    } else {
      return `${day}-${month}-${year}-${hour}`;
    }
  };

  const month2 = () => {
    let date = new Date();
    let month = date.getMonth() + 1;
    return month;
  };

  const mes = month2();

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    const grua = e.target.grua;
    setData({ ...data, [id]: value, grua });
  };

  const cargaDB = collection(db, "cargaCombustible");

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      await setDoc(doc(cargaDB, "hyundai", `Mes-${mes}`, `${getFecha()}`), {
        contador: `${data.contador}`,
        horometro: `${data.horometro}`,
        litros: `${data.litros}`,
        fecha: getFecha(),
      });
    } catch (error) {
      console.log(error);
    }
  };

  //   const handleAdd = async (e) => {
  //     e.preventDefault();

  //     const equipo = doc(db, "komatsu");
  //     try {
  //       const res = await updateDoc(equipo, {
  //         contador: arrayUnion(`${data.contador}`),
  //         horometro: arrayUnion(`${data.horometro}`),
  //         litros: arrayUnion(`${data.litros}`),
  //         fecha: arrayUnion(`${getFecha()}`),
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <>
      <form className="container w-50 mt-5">
        <div className="row align-items-center">
          <div className="col">Grua Hynudai</div>
          <div className="col">HoroMetro Inicial</div>
          <div className="col">HoroMetro Final</div>
          <div className="col">Abril-2022</div>
        </div>
        <label className="form-label">Realizar Carga</label>
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
        {/* <div className="d-md-flex justify-content-md-center"> */}
        <button type="submit" className="btn btn-primary" onClick={handleAdd}>
          Carga Combustible
        </button>
        {/* </div> */}
      </form>
      <TablaCargaCombustible />
    </>
  );
};

export default Hyundai;
