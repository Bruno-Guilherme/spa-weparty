import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const LayoutComHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",

      }}
    >
      <Header />

      <Container
      maxWidth="xl"
      sx={{
        bgcolor: "red",
        flexGrow: 2
      }}
      >
        <Outlet />
      </Container>

      <Footer />
    </Box>
  );
};

export default LayoutComHeader;
