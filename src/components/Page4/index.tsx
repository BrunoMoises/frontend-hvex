import { Container, Content, Img, Titulo, SubTitulo, Descricao, BoxIcons } from "./styles"
import icon1 from './icons/icon1.png'
import icon2 from './icons/icon2.png'
import icon3 from './icons/icon3.png'
import icon4 from './icons/icon4.png'
import icon5 from './icons/icon5.png'
import icon6 from './icons/icon6.png'
import icon7 from './icons/icon7.png'
import Image from "next/image"

const iconsList = [
    {
        icon: icon1,
        alt: 'Icon 1'
    },
    {
        icon: icon2,
        alt: 'Icon 2'
    },
    {
        icon: icon3,
        alt: 'Icon 3'
    },
    {
        icon: icon1,
        alt: 'Icon 8'
    },
    {
        icon: icon4,
        alt: 'Icon 4'
    },
    {
        icon: icon5,
        alt: 'Icon 5'
    },
    {
        icon: icon6,
        alt: 'Icon 6'
    },
    {
        icon: icon7,
        alt: 'Icon 7'
    }
]

export const Page4 = () => {
    return (
        <Container>
            <Img />
            <Content>
                <Titulo>OMNI TRAFO</Titulo>
                <SubTitulo>Monitoramento inteligente de transformadores de distribuição</SubTitulo>
                <Descricao>O Omni trafo é uma solução consolidada para monitoramento de ativos.   Através deste equipamento, informações importantes da rede são enviadas em tempo real , permitindo, assim, a administração remota de dados como: </Descricao>
                <BoxIcons>
                    {iconsList.map((icon) => 
                        <Image src={icon.icon} alt={icon.alt} width={140} />
                    )}
                </BoxIcons>
            </Content>
        </Container>
    )
}
