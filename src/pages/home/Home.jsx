import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { CardPequeno } from "../../shared/components/card-pequeno/CardPequeno";
import imgBuffet from "../../assets/card-pequeno/buffet.png";
import imgCerimonial from "../../assets/card-pequeno/cerimonial.png";
import imgDecoracao from "../../assets/card-pequeno/decoracao.png";
import imgFotografia from "../../assets/card-pequeno/fotografia.png";
import imgPersonalizados from "../../assets/card-pequeno/personalizados.png";

import { CardGrande } from "../../shared/components/card-grande/CardGrande";
import img1 from "../../assets/card-grande/img1.png";
import img2 from "../../assets/card-grande/img2.png";
import img3 from "../../assets/card-grande/img3.png";
import img4 from "../../assets/card-grande/img4.png";

import { CardMedio } from "../../shared/components/card-medio/CardMedio";

export function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // Quando o componente for montado, anima o conteúdo
  }, []);

  return (
    <main>
      <Box sx={{ textAlign: "center", padding: 2 }}>
        {/* Título de Categorias de Serviços */}
        <Typography
          variant="h2"
          component="h2"
          sx={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateX(0)" : "translateX(-100%)",
            transition: "all 1s ease-out",
            fontSize: "1.5rem", // Ajustado para o tamanho anterior
            fontWeight: 600, // Aumentando o peso da fonte para torná-la mais grossa
            marginBottom: "1rem", // Adicionando distância entre o título e os cards
          }}
        >
          Categorias de serviços
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            gap: 2,
            flexWrap: "wrap",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateX(0)" : "translateX(-100%)",
            transition: "all 1s ease-out 0.5s", // Atraso para os cartões aparecerem depois do título
          }}
        >
          <CardPequeno
            categoriaNome={"Buffet"}
            urlImagem={imgBuffet}
            descricaoImagem={"Ícone buffet"}
          />
          <CardPequeno
            categoriaNome={"Decoração"}
            urlImagem={imgDecoracao}
            descricaoImagem={"Ícone decoração"}
          />
          <CardPequeno
            categoriaNome={"Personalizados"}
            urlImagem={imgPersonalizados}
            descricaoImagem={"Ícone personalizados"}
          />
          <CardPequeno
            categoriaNome={"Cerimonial"}
            urlImagem={imgCerimonial}
            descricaoImagem={"Ícone cerimonial"}
          />
          <CardPequeno
            categoriaNome={"Fotografia"}
            urlImagem={imgFotografia}
            descricaoImagem={"Ícone fotografia"}
          />
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", padding: 2 }}>
        {/* Título de Promoções da Semana */}
        <Typography
          variant="h2"
          component="h2"
          sx={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateX(0)" : "translateX(-100%)",
            transition: "all 1s ease-out 1s", // Atraso para o título das promoções
            fontSize: "1.5rem", // Ajustado para o tamanho anterior
            fontWeight: 600, // Aumentando o peso da fonte para torná-la mais grossa
            marginBottom: "1rem", // Adicionando distância entre o título e os cards
          }}
        >
          Promoções da semana
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            gap: 2,
            flexWrap: "wrap",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateX(0)" : "translateX(-100%)",
            transition: "all 1s ease-out 1.5s", // Atraso para os cartões de promoções
          }}
        >
          <CardGrande
            categoriaNome={"BlackFriday para Buffet"}
            urlImagem={img1}
            descricaoImagem={"ícone preto Black Friday"}
          />
          <CardGrande
            categoriaNome={"50% Off para fotografia"}
            urlImagem={img2}
            descricaoImagem={"ícone preto Black Friday"}
          />
          <CardGrande
            categoriaNome={"Sale em personalizados"}
            urlImagem={img3}
            descricaoImagem={"ícone preto Black Friday"}
          />
          <CardGrande
            categoriaNome={"Black Friday para fotografia"}
            urlImagem={img4}
            descricaoImagem={"ícone preto Black Friday"}
          />
        </Box>
      </Box>
    </main>
  );
}