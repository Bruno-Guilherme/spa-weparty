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
import useCartStore from "../../contexts/carrinhoContext";
import { Link } from "react-router-dom";

const Header = () => {
  const cart = useCartStore((state) => state.cart);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#ffffff", color: "#333" }}
      >
        <Toolbar sx={{ maxWidth: "xl", margin: "0 auto", width: "100%" }}>
          {/* Logomarca estilizada */}
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
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
          </Link>

          <Box
            sx={{ display: { xs: "none", sm: "flex" }, gap: 2, flexGrow: 1 }}
          >
            <Link to="/">
              <Button color="inherit" sx={{ color: "#333", fontWeight: 500 }}>
                Home
              </Button>
            </Link>
            <Link to="/promocoes">
              <Button color="inherit" sx={{ color: "#333", fontWeight: 500 }}>
                Promoções
              </Button>
            </Link>
            <Link to="/fornecedores">
              <Button color="inherit" sx={{ color: "#333", fontWeight: 500 }}>
                Fornecedores
              </Button>
            </Link>
            <Link to="/servicos">
              <Button color="inherit" sx={{ color: "#333", fontWeight: 500 }}>
                Serviços
              </Button>
            </Link>
            <Link to="/sobre">
              <Button
                color="inherit"
                href="/sobre"
                sx={{ color: "#333", fontWeight: 500 }}
              >
                Sobre
              </Button>
            </Link>
          </Box>

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
                  borderRadius: "20px",
                },
              }}
            />
          </Box>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Link to="/carrinho">
              <IconButton color="inherit" sx={{ color: "#333" }}>
                <Badge badgeContent={cart.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/login">
              <IconButton color="inherit" sx={{ color: "#333" }}>
                <PersonIcon />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

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
          <a
            href="/promocoes"
            style={{ textDecoration: "none", color: "#333" }}
          >
            Promoções
          </a>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <a
            href="/fornecedores"
            style={{ textDecoration: "none", color: "#333" }}
          >
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
