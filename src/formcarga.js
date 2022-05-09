export const options = [
  { id: "grua", value: "komatsu", label: "Grua Komatsu" },
  { value: "hyundai", label: "Grua Hyundai" },
  { value: "hyster", label: "Grua Hyster" },
  { value: "electrogeno", label: "Grupo Electrogeno" },
  { value: "bidones", label: "Bidones Porteria" },
];

export const cargaInputs = [
  {
    id: "horometro",
    label: "horometro",
    type: "number",
    placeholder: "Horometro",
  },
  {
    id: "litros",
    label: "litros",
    type: "number",
    placeholder: "Litros Cargados",
  },
  {
    id: "contador",
    label: "contador",
    type: "number",
    placeholder: "Contador",
  },
];

export const columns = [
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

export const columnasTablaEquipos = [
  // { field: "id", headerName: "ID", width: 70 },
  { field: "equipo", headerName: "equipo", width: 130 },
  // { field: "horometro", headerName: "Horometro", width: 150 },
  {
    field: "litros",
    headerName: "Litros Cargados",
    type: "number",
    width: 150,
  },
  // {
  //   field: "mes",
  //   headerName: "Mes",
  //   width: 90,
  // },
  // {
  //   field: "fecha",
  //   headerName: "Fecha y Hora",
  //   width: 200,
  // },
];
