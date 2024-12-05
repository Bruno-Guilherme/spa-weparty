// Login.js
import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (onLogin) {
      onLogin({ email, password });
    }
    console.log("Usuário logado:", { email, password });
  };

  return (
    <Paper
      elevation={3}
      sx={{ padding: 4, maxWidth: 400, margin: "auto", marginTop: 4 }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <Box component="form" onSubmit={handleLogin} noValidate>
        <TextField
          fullWidth
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Entrar
        </Button>
      </Box>
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
      </Typography>
    </Paper>
  );
};

export default Login;
