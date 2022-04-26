import { collection } from "firebase/firestore";
import { db } from "../firebase";

export const getDate = () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.toLocaleTimeString();

  if (month < 10) {
    return `${day}-0${month}-${year}  ${hour}`;
  } else {
    return `${day}-${month}-${year}-${hour}`;
  }
};

//export const fecha = getFecha();

export const getMonth = () => {
  let date = new Date();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (month < 10) {
    return `0${month}-${year}`;
  } else {
    return `${month}-${year}`;
  }
};

export const cargaDB = collection(db, "cargaCombustible");
