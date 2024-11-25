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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

import { Outlet } from "react-router-dom";

import { useState } from "react";

import { Footer } from "../components/footer/Footer";
import Header from "../components/header/Header";

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
      <Header />

      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "pink",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Outlet />
      </Box>

      <Footer />
    </>
  );
};

export default LayoutComHeader;
