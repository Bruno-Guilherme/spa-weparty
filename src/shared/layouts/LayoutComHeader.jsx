import { Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Button,
  Container,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Ícone do carrinho
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

const LayoutComHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ maxWidth: "xl", margin: "0 auto", width: "100%" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h2"
            component="h1"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            WeParty
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Pesquisar no WeParty"
              sx={{ marginRight: 2 }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button color="inherit" startIcon={<ShoppingCartIcon />}></Button>
            <Button color="inherit" startIcon={<PersonIcon />}></Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <a href="/">Home</a>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <a href="/about">Sobre</a>
        </MenuItem>
      </Menu>

        <Container maxWidth="md" component="main" sx={{
          height: "100vh",
        }}>
          <Outlet />
        </Container>

      <footer>
        <Typography variant="body2" color="text.secondary" align="center">
          © 2024 WeParty
        </Typography>
      </footer>
    </>
  );
};

export default LayoutComHeader;
