import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ padding: 2, textAlign: "center" }}>
      <Typography variant="body2" color="text.secondary">
        © 2024 WeParty
      </Typography>
    </Box>
  );
};

export default Footer;