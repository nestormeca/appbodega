import { Box, Container, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import useStyles from "../styles";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { TablaCargaCombustible } from "../components/TablaCargaCombustible";
import Resumen from "../components/Resumen";

export default function DataTable({ cargaInputs }) {
  const classes = useStyles();
  const [data, setData] = useState({});
  //const [file, setFile] = useState("");
  const [grua, setGrua] = useState();

  const getFecha = () => {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) {
      return `${day}-0${month}-${year}`;
    } else {
      return `${day}-${month}-${year}`;
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

  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, `${mes}`), {
        contador: [`${data.contador}`],
        horometro: [`${data.horometro}`],
        litros: [`${data.litros}`],
        fecha: [getFecha()],
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const handleAdd = async (e) => {
  //   e.preventDefault();

  //   const equipo = doc(db, `${grua}`);
  //   try {
  //     const res = await updateDoc(equipo, {
  //       contador: arrayUnion(`${data.contador}`),
  //       horometro: arrayUnion(`${data.horometro}`),
  //       litros: arrayUnion(`${data.litros}`),
  //       fecha: arrayUnion(`${getFecha()}`),
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <Container style={{ height: 400, width: 900 }} align="center">
        <Box className={classes.login}>
          <form onSubmit={handleAdd}>
            <Typography>Carga de Combustible</Typography>
            <select
              id="gruas"
              value={grua}
              onChange={(e) => {
                const selectedGrua = e.target.value;
                setGrua(selectedGrua);
              }}
            >
              <option value="grua" selected disabled hidden>
                Selecciona un Equipo
              </option>
              <option value="komatsu">Komatsu</option>
              <option value="hyundai">Hyundai</option>
              <option value="hyster">Hyster</option>
            </select>
            {cargaInputs.map((input) => (
              <div className={classes.formInput} key={input.id}>
                <label>{input.label}</label>
                <input
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  onChange={handleInput}
                />
              </div>
            ))}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
            >
              Enviar
            </Button>
          </form>
        </Box>
      </Container>
      <div>
        <TablaCargaCombustible />
        <Resumen />
      </div>
    </>
  );
}
