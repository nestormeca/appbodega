import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

export const TablaCargaCombustible = ({ props }) => {
  const [data, setData] = useState([]);

  const columns = [
    // { field: "id", headerName: "ID", width: 70 },
    // { field: "grua", headerName: "Equipo", width: 130 },
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
      collection(db, "cargaCombustible", `${props}`, "Mes-4"),
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

  return (
    <Container style={{ height: 400, width: 700 }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={30}
        rowsPerPageOptions={[30]}
        //checkboxSelection
      />
    </Container>
  );
};
