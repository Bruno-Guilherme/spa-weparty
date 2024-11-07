import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const Login = () => {
  const handleLoginSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: 8 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ padding: 3, boxShadow: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>
        
        <Box component="form" onSubmit={handleLoginSubmit} sx={{ width: '100%', mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Senha"
            type="password"
            variant="outlined"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
        </Box>

        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Crie sua conta
          </Button>
      </Box>

      <Box mt={5} textAlign="center">
        <Typography variant="body2" color="text.secondary">
          © 2024 WeParty
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
