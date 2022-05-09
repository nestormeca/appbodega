import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { getMonth } from "./Fecha";

import { columnasTablaEquipos } from "../formcarga";

const CargaPorEquipo = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "cargaCombustible", "otrosvehiculos", `${getMonth()}`),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const maquinas = data.map((e) => {
    return e;
  });

  //   const litrosCargados = data.map((mov) => {
  //     return parseInt(mov.litros);
  //   });

  const hyundai = data.filter((equi) => {
    return equi.equipo === "hyundai";
  });
  console.log(hyundai);

  const litrosHyundai = hyundai.map((mov) => {
    return mov.litros;
  });
  console.log(litrosHyundai);

  const sumatoriaHyundai = litrosHyundai.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  console.log(sumatoriaHyundai);

  //   const sumatoria = litrosCargados.reduce((acc, cur) => {
  //     return acc + cur;
  //   }, 0);

  //   console.log(sumatoria);

  return (
    <Container style={{ height: 400, width: 700, textAlign: "center" }}>
      <h2>Total de Litros Cargados: {sumatoriaHyundai}</h2>
      {/* <DataGrid
        className="mt-3"
        rows={maquinas}
        columns={columnasTablaEquipos}
        pageSize={30}
        rowsPerPageOptions={[30]}
        //checkboxSelection
      /> */}
    </Container>
  );
};

export default CargaPorEquipo;
