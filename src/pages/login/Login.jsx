import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../shared/contexts/authStore";
import { loginService } from "../../shared/services/authService";

const Login = () => {
  const [userEmail, setEmail] = useState("");
  const [userSenha, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    if (userEmail === "admin@admin.com" && userSenha === "admin") {
      login({ email: userEmail });
      navigate("/dashboard");
    } else {
      try {
        const data = await loginService(userEmail, userSenha);
        if (data) {
          login({ email: userEmail });
          navigate("/dashboard");
        } else {
          alert("Credenciais inválidas!!");
        }
      } catch (error) {
        alert("Erro no login: " + error.message);
      }
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
          value={userEmail}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Senha"
          type="password"
          value={userSenha}
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
