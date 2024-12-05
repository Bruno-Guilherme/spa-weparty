import { Box, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const LayoutSemHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container
        sx={{
          flexGrow: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Botão para redirecionar para a home */}
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          sx={{ mb: 2 }} // Margem inferior para espaçamento
        >
          Ir para Home
        </Button>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default LayoutSemHeader;
