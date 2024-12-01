import { Box, Typography } from "@mui/material";

export function CardPequeno({ categoriaNome, urlImagem, descricaoImagem }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        borderRadius: "12px", // Bordas arredondadas para o cartão
        backgroundColor: "#f9f9f9", // Cor de fundo suave
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Sombra leve para destacar
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)", // Efeito de hover para interatividade
        },
      }}
    >
      <Box
        component="img"
        src={urlImagem}
        alt={descricaoImagem}
        sx={{
          width: "100px", // Define o tamanho da imagem
          height: "100px",
          borderRadius: "50%", // Imagem redonda
          marginBottom: "0.5rem", // Espaçamento entre imagem e texto
        }}
      />
      <Typography
        variant="body1"
        sx={{
          fontWeight: 600, // Texto em negrito
          textAlign: "center",
          fontSize: "0.9rem", // Tamanho ajustado
        }}
      >
        {categoriaNome}
      </Typography>
    </Box>
  );
}
