import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        padding: 2,
        textAlign: "center",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)", // Sombra sutil no topo do footer
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © 2024 WeParty
      </Typography>
    </Box>
  );
};

export default Footer;
