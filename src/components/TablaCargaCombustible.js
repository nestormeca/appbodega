import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { getMonth } from "./Fecha";
import { columns } from "../formcarga";

export const TablaCargaCombustible = ({ props, equipo }) => {
  const [data, setData] = useState([]);

  const totalizadorDeLitros = doc(db, "totalizadorDeLitros", `${equipo}`);
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

  console.log(data);

  const litrosCargados = data.map((mov) => {
    return mov.litros;
  });

  const sumatoria = litrosCargados.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  useEffect(async () => {
    const litraje = await updateDoc(
      totalizadorDeLitros,
      {
        litrosCargados: parseInt(`${sumatoria}`),
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      litraje();
    };
  }, [sumatoria]);

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
    </Container>
  );
};
