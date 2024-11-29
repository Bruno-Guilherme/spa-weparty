import { Box, Typography } from "@mui/material";

export function CardGrande({ categoriaNome, urlImagem, descricaoImagem }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.3s ease", // Animação suave
        "&:hover": {
          transform: "scale(1.05)", // Ampliação do componente no hover
        },
      }}
    >
      <Box
        component="img"
        src={urlImagem}
        alt={descricaoImagem}
        sx={{
          width: "100%", // Imagem ocupa toda a largura disponível
          maxWidth: "300px", // Define um tamanho máximo
          height: "auto", // Mantém a proporção da imagem
        }}
      />
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          marginTop: "0.5rem", // Espaçamento entre a imagem e o texto
        }}
      >
        {categoriaNome}
      </Typography>
    </Box>
  );
}
