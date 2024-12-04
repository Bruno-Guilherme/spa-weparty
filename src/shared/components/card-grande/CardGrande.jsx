import { Box, Button, Typography } from "@mui/material";

export function CardGrande({ categoriaNome, urlImagem, descricaoImagem }) {
  return (
    <Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "250px", // Tamanho mínimo para o conteúdo
          minWidth: "100px", // Tamanho mínimo para o conteúdo
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
    </Button>
  );
}
