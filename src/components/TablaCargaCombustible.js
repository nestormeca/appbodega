import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { getMonth } from "./Fecha";

export const TablaCargaCombustible = ({ props }) => {
  const [data, setData] = useState([]);

  console.log(data);

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    { field: "equipo", headerName: "Equipo", width: 130 },
    { field: "horometro", headerName: "Horometro", width: 150 },
    {
      field: "litros",
      headerName: "Litros Cargados",
      type: "number",
      width: 150,
    },
    {
      field: "contador",
      headerName: "Contador",
      type: "number",
      width: 90,
    },
    {
      field: "fecha",
      headerName: "Fecha y Hora",
      width: 200,
    },
  ];

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "cargaCombustible", `${props}`, `${getMonth()}`),
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

  const litrosCargados = data.map((mov) => {
    return parseInt(mov.litros);
  });

  const equipos = data.filter((equi) => {
    return equi.equipo === "volvo";
  });

  const volvo = equipos.map((mov) => {
    return mov.litros;
  });

  console.log(volvo);
  const sumatoria = litrosCargados.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return (
    <Container style={{ height: 400, width: 700, textAlign: "center" }}>
      <h2>Total de Litros Cargados: {sumatoria}</h2>
      <DataGrid
        className="mt-3"
        rows={data}
        columns={columns}
        pageSize={30}
        rowsPerPageOptions={[30]}
        //checkboxSelection
      />
      <h1>{volvo}</h1>
    </Container>
  );
};
