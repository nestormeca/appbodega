import { makeStyles } from "@material-ui/core";
//import { height } from "@mui/system";

export default makeStyles((them) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
  login: {
    width: "500px",
    borderStyle: "groove",
    borderRadius: 15,
    margin: "30px 0px",
    height: "300px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "& form": {
      display: "flex",
      flexDirection: "column",
    },
    "& input": {
      width: "300px",
      height: "30px",
      margin: "10px",
    },
  },
  formInput: {
    width: "40%",
    "& label": {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
  },
  [them.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
