import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const Servicos = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Serviços</h1>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '16px', margin: '20px 0' }}>
                {/* Buffet Card */}
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/src/assets/card-pequeno/buffet.png"
                            alt="Buffet"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Buffet
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                O serviço de buffet fornece refeições e bebidas para eventos, cuidando do preparo, apresentação e, frequentemente, do atendimento aos convidados.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://buffetspertodemim.com.br/o-que-e-buffet-e-quais-sao-os-tipos/">
                            Saiba mais
                        </Button>
                    </CardActions>
                </Card>

                {/* Decoração Card */}
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/src/assets/card-pequeno/decoracao.png"
                            alt="Decoração"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Decoração
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                O serviço de decoração cria e organiza elementos visuais para transformar ambientes, alinhando estética e funcionalidade ao tema ou estilo do evento ou espaço.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://blog.archtrends.com/decoracao/">
                            Saiba mais
                        </Button>
                    </CardActions>
                </Card>

                {/* Personalizados Card */}
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/src/assets/card-pequeno/personalizados.png"
                            alt="Personalizados"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Personalizados
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                O serviço de personalizados cria itens exclusivos e customizados, como lembranças, convites ou acessórios, adaptados ao tema ou preferência do cliente para eventos ou projetos especiais.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://blog.archtrends.com/decoracao/">
                            Saiba mais
                        </Button>
                    </CardActions>
                </Card>

                {/* Cerimonial Card */}
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/src/assets/card-pequeno/cerimonial.png"
                            alt="Cerimonial"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Cerimonial
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                O serviço de cerimonial organiza e coordena eventos, garantindo que todas as etapas ocorram conforme planejado, desde o protocolo até o acompanhamento de fornecedores e convidados.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://blog.archtrends.com/decoracao/">
                            Saiba mais
                        </Button>
                    </CardActions>
                </Card>

                {/* Fotografia Card */}
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/src/assets/card-pequeno/fotografia.png"
                            alt="Fotografia"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Fotografia
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                O serviço de fotografia captura momentos especiais através de imagens, utilizando técnicas profissionais para registrar memórias com qualidade, criatividade e emoção.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" href="https://www.instagram.com/flaviio.rodriguesv?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                            Saiba mais
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};

export default Servicos;
