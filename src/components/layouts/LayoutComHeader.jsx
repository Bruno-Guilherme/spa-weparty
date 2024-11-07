import { Outlet, useNavigate } from "react-router-dom"; // Importe useNavigate
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const LayoutComHeader = () => {
  const navigate = useNavigate(); // Crie o navigate para redirecionamento
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Função para redirecionar ao clicar no botão "Entrar"
  const handleLoginClick = () => {
    navigate("/login"); // Redireciona para a rota de login
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WeParty
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Pesquisar no WeParty"
            sx={{ marginRight: 2 }}
          />
          <Button color="inherit" onClick={handleLoginClick}> {/* Adicione o evento onClick */}
            Entrar
          </Button>
          <Button color="inherit">Carrinho</Button>
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

      <main>
        <Container maxWidth="md">
          <Outlet />
        </Container>
      </main>

      <footer>
        <Typography variant="body2" color="text.secondary" align="center">
          © 2024 WeParty
        </Typography>
      </footer>
    </>
  );
};

export default LayoutComHeader;
