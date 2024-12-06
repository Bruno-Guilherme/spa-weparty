import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { registerService } from "../../shared/services/registerService";

const Register = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    // Validação de campos
    if (!nome || !email || !telefone || !endereco || !cpf || !senha || !confirmPassword) {
      alert("Todos os campos são obrigatórios.");
      return;
    }

    if (senha !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      await registerService(nome, email, telefone, endereco, cpf, senha);
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      alert("Erro ao registrar: " + error.message);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{ padding: 4, maxWidth: 500, margin: "auto", marginTop: 4 }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Cadastro
      </Typography>
      <Box component="form" onSubmit={handleRegister} noValidate>
        <TextField
          fullWidth
          label="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
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
          label="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Confirmar Senha"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          Cadastrar
        </Button>
      </Box>
    </Paper>
  );
};

export default Register;
