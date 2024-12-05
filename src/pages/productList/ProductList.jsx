// ProductList.js
import React from "react";
import { Grid2, Typography, Box } from "@mui/material";
import ProductCard from "../../shared/components/productCard/ProductCard";
import { useLoaderData } from "react-router-dom";

const ProductList = () => {
  const produtos = useLoaderData();
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Produtos
      </Typography>
      <Grid2 container spacing={3}>
        {produtos.map((product) => (
          <Grid2 item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default ProductList;
