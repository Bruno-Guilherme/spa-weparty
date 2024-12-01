import { Typography, Container, Box } from "@mui/material";
import { useEffect, useState } from "react";

export function Sobre() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true); // Quando o componente for montado, anima o conteúdo
    }, []);

    return (
        <Container maxWidth="md">
            <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Título principal */}
                <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    sx={{
                        color: "#d32f2f",
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateX(0)' : 'translateX(-100%)',
                        transition: 'all 1s ease-out',
                        textAlign: 'center', // Alinhando o título
                    }}
                >
                    SOBRE
                </Typography>

                {/* Subtítulo */}
                <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{
                        color: "#e53935",
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateX(0)' : 'translateX(-100%)',
                        transition: 'all 1.2s ease-out 0.2s', // Adicionando atraso
                        textAlign: 'center', // Alinhando o subtítulo
                    }}
                >
                    Bem-vindo ao WeParty!
                </Typography>

                {/* Texto introdutório */}
                <Typography
                    variant="body1"
                    sx={{
                        color: "#212121",
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateX(0)' : 'translateX(-100%)',
                        transition: 'all 1.5s ease-out 0.4s', // Atraso maior para o texto
                        textAlign: 'center', // Alinhando o texto
                        maxWidth: '800px', // Limita a largura para um melhor alinhamento
                    }}
                >
                    O WeParty é uma plataforma que conecta fornecedores de serviços para eventos com aqueles que buscam contratar esses serviços. 
                    Nossa missão é facilitar a organização de eventos, oferecendo uma ampla gama de opções e garantindo a melhor experiência para nossos usuários.
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: "#212121",
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateX(0)' : 'translateX(-100%)',
                        transition: 'all 1.5s ease-out 0.6s',
                        textAlign: 'center', // Alinhando o texto
                        maxWidth: '800px', // Limita a largura para um melhor alinhamento
                    }}
                >
                    Aqui você pode encontrar fornecedores de diversos serviços, desde decoração até catering, tudo em um só lugar. 
                    Navegue pelo nosso site e descubra tudo o que temos a oferecer!
                </Typography>

                {/* Título "História" */}
                <Typography
                    variant="h5"
                    component={"h5"}
                    gutterBottom
                    sx={{
                        color: "#d32f2f",
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateX(0)' : 'translateX(-100%)',
                        transition: 'all 1s ease-out 0.8s',
                        textAlign: 'center', // Alinhando o título
                    }}
                >
                    <br/>
                    WeParty - A história!
                </Typography>
                <Typography
                    variant="body1"
                    textAlign={"center"}
                    sx={{
                        color: "#212121",
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateX(0)' : 'translateX(-100%)',
                        transition: 'all 1.5s ease-out 1s',
                        maxWidth: '800px', // Limita a largura para um melhor alinhamento
                    }}
                >
                    O WeParty foi criado para facilitar a conexão entre organizadores de eventos e fornecedores de serviços especializados, permitindo que você encontre tudo o que precisa para seu evento em um só lugar. <br/>
                    Ele surgiu a partir de um projeto de Residência Digital, com cinco estudantes, alunos do Embarque Digital no Recife.
                </Typography>

                {/* Título "Missão" */}
                <Typography
                    variant="h5"
                    component={"h5"}
                    gutterBottom
                    sx={{
                        color: "#d32f2f",
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateX(0)' : 'translateX(-100%)',
                        transition: 'all 1s ease-out 1.2s',
                        textAlign: 'center', // Alinhando o título
                    }}
                >
                    <br/>
                    Objetivo e Missão!
                </Typography>
                <Typography
                    variant="body1"
                    textAlign={"center"}
                    sx={{
                        color: "#212121",
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateX(0)' : 'translateX(-100%)',
                        transition: 'all 1.5s ease-out 1.4s',
                        maxWidth: '800px', // Limita a largura para um melhor alinhamento
                    }}
                >
                    Nossa missão é simplificar a organização de eventos, proporcionando uma plataforma onde fornecedores e clientes possam se conectar de forma prática e segura. Buscamos inovar, unificando a rede de fornecedores/organizadores de evento em um só lugar!
                </Typography>

                {/* Título "Benefícios" */}
                <Typography
                    variant="h5"
                    textAlign={"center"}
                    sx={{
                        color: "#d32f2f",
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateX(0)' : 'translateX(-100%)',
                        transition: 'all 1s ease-out 1.6s',
                    }}
                >
                    <br/>
                    Benefícios para os usuários    
                </Typography>
                <Typography
                    variant="body1"
                    component={"h5"}
                    gutterBottom
                    sx={{
                        color: "#212121",
                        opacity: loaded ? 1 : 0,
                        transform: loaded ? 'translateX(0)' : 'translateX(-100%)',
                        transition: 'all 1.5s ease-out 1.8s',
                        textAlign: 'center', // Alinhando o texto
                        maxWidth: '800px', // Limita a largura para um melhor alinhamento
                    }}
                >
                    Facilidade na contratação de serviços. <br/>
                    Variedade de fornecedores em um só lugar. <br/>
                    Pagamentos seguros e integrados.
                </Typography>
            </Box>
        </Container>
    );
}
