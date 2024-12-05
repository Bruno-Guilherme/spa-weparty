// src/pages/Dashboard.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import useAuthStore from "../../shared/contexts/authStore";

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <Box sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h4">Bem-vindo, {user?.email}!</Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 2 }}
        onClick={logout}
      >
        Sair
      </Button>
    </Box>
  );
};

export default Dashboard;