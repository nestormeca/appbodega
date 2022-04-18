import { Box, Container, Button, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import useStyles from "../styles";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <>
      <Container align="center">
        <Box className={classes.login} align="center">
          <form className={classes.formLogin} onSubmit={handleLogin}>
            <Typography>INGRESO BODEGA COLINA</Typography>
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
            >
              Login
            </Button>
            {error && (
              <span>
                <Typography>Usuario o Contraseña incorrecta!</Typography>
              </span>
            )}
          </form>
        </Box>
      </Container>
    </>
  );
};
