import { Box, Container } from "@mui/material";
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
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default LayoutSemHeader;
