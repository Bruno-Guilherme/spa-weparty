// ProductCard.js
import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import useCartStore from "../../contexts/carrinhoContext";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image || "https://via.placeholder.com/150"}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Box sx={{ marginTop: 1, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6">R${product.price.toFixed(2)}</Typography>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => addToCart(product)}
          >
            Adicionar
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;