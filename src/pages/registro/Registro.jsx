// Register.js
import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Register = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Aqui você pode integrar a lógica de registro
    if (onRegister) {
      onRegister({ name, email, password });
    }
    console.log("Usuário registrado:", { name, email, password });
  };

  return (
    <Paper
      elevation={3}
      sx={{ padding: 4, maxWidth: 400, margin: "auto", marginTop: 4 }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Registro
      </Typography>
      <Box component="form" onSubmit={handleRegister} noValidate>
        <TextField
          fullWidth
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          required
        />
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
          Registrar
        </Button>
      </Box>
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        Já tem uma conta? <Link to="/login">Faça login</Link>
      </Typography>
    </Paper>
  );
};

export default Register;
