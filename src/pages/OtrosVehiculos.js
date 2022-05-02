import React, { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { getDate, getMonth, cargaDB, getMonth2 } from "../components/Fecha";
import { TablaCargaCombustible } from "../components/TablaCargaCombustible";
import { cargaInputs } from "../formcarga";
import useStyles from "../styles";

const OtrosVehiculos = () => {
  const [data, setData] = useState({});
  const [equipo, setEquipo] = useState({});
  const classes = useStyles();

  console.log(equipo);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      await setDoc(
        doc(cargaDB, "otrosvehiculos", `${getMonth()}`, `${getMonth2()}`),
        {
          contador: `${data.contador}`,
          horometro: `${data.horometro}`,
          litros: `${data.litros}`,
          equipo: `${equipo}`,
          fecha: getDate(),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <form className="container w-50 mt-5 justify-content-center">
        <div className="row align-items-center">
          <h4 className="col">Otros Vehiculos</h4>
        </div>
        {/* <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            Vehiculo:
          </span>
          <input
            className="form-control"
            id="equipo"
            label="Vehiculo"
            type="strim"
            placeholder="Vehiculo"
            onChange={handleInput}
          />
        </div> */}

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
          <option value="komatsu">Komatsu</option>
          <option value="hyundai">Hyundai</option>
          <option value="hyster">Hyster</option>
        </select>
        {/* {cargaInputs.map((input) => (
          <div className={classes.formInput} key={input.id}>
            <label>{input.label}</label>
            <input
              id={input.id}
              type={input.type}
              placeholder={input.placeholder}
              onChange={handleInput}
            />
          </div>
        ))} */}

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
      <TablaCargaCombustible props={"otrosvehiculos"} equipo={"otros"} />
    </div>
  );
};

export default OtrosVehiculos;
