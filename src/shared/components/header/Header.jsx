import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Button,
  Box,
  Badge, // Certifique-se de importar o Badge
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartCount, setCartCount] = useState(3); // Exemplo de quantidade de itens no carrinho

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#ffffff", color: "#333" }}>
        <Toolbar sx={{ maxWidth: "xl", margin: "0 auto", width: "100%" }}>
          {/* Logomarca estilizada */}
          <Typography
            variant="h4"
            component="h1"
            sx={{
              textAlign: "left",
              marginRight: 2,
              fontFamily: "Montserrat",
              fontWeight: "bold",
              color: "#ff4d4f", // Cor vermelha elegante
            }}
          >
            WeParty
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2, flexGrow: 1 }}>
            <Button color="inherit" href="/" sx={{ color: "#333", fontWeight: 500 }}>
              Home
            </Button>
            <Button color="inherit" href="/sobre" sx={{ color: "#333", fontWeight: 500 }}>
              Sobre
            </Button>
            <Button color="inherit" href="/promocoes" sx={{ color: "#333", fontWeight: 500 }}>
              Promoções
            </Button>
            <Button color="inherit" href="/fornecedores" sx={{ color: "#333", fontWeight: 500 }}>
              Fornecedores
            </Button>
            <Button color="inherit" href="/servicos" sx={{ color: "#333", fontWeight: 500 }}>
              Serviços
            </Button>
          </Box>

          {/* Barra de pesquisa maior */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Pesquisar no WeParty"
              sx={{
                width: "300px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px", // Deixa os cantos arredondados
                },
              }}
            />
          </Box>

          {/* Ícones de carrinho e perfil com alinhamento e espaçamento correto */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <IconButton color="inherit" sx={{ color: "#333" }}>
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" sx={{ color: "#333" }}>
              <PersonIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Menu hamburguer para telas pequenas */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <a href="/" style={{ textDecoration: "none", color: "#333" }}>
            Home
          </a>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <a href="/sobre" style={{ textDecoration: "none", color: "#333" }}>
            Sobre
          </a>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <a href="/promocoes" style={{ textDecoration: "none", color: "#333" }}>
            Promoções
          </a>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <a href="/fornecedores" style={{ textDecoration: "none", color: "#333" }}>
            Fornecedores
          </a>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <a href="/servicos" style={{ textDecoration: "none", color: "#333" }}>
            Serviços
          </a>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
