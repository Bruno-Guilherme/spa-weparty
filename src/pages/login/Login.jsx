import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../shared/contexts/authStore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (email === "admin@example.com" && password === "password") {
      login({ email });
      navigate("/dashboard");
    } else {
      alert("Credenciais inválidas!");
    }
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
        Não tem uma conta?{" "}
        <Button
          component={Link}
          to="/cadastro"
          variant="text"
          color="primary"
          sx={{ textTransform: "none", padding: 0 }}
        >
          Cadastre-se
        </Button>
      </Typography>
    </Paper>
  );
};

export default Login;
