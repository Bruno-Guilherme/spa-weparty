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
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
      >
        Ir para Home
      </Button>
      <Container
        sx={{
          flexGrow: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default LayoutSemHeader;
