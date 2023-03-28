import { Box, BoxIcons, Container, Content, FooterCopyRight } from './styles'
import logo from '../../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import linkedin from '../../assets/linkedin.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'

const contentItems = [
    {
        h1: 'Endereço',
        p: 'R. Ismael Pinto de Noronha, 86 - Nossa Sra. de Fatima, Itajubá - MG, 37502-508'
    },
    {
        h1: 'Contato',
        p: '(35) 3622-2699 contato@hvex.com.br'
    }
]

const linkItems = [
    {
        icon: linkedin,
        alt: "LinkedIn"
    },
    {
        icon: facebook,
        alt: "Facebook"
    },
    {
        icon: instagram,
        alt: "Instagram"
    },
    {
        icon: youtube,
        alt: "YouTube"
    },
]

export const Footer = () => {
    return (
        <Container>
            <Link href="/">
                <Image src={logo} alt="HVEX" width={120} />
            </Link>
            <Content>
                {contentItems.map((item) =>
                    <Box>
                        <h1>{item.h1}</h1>
                        <p>{item.p}</p>
                    </Box>
                )}
                <Box>
                    <h1>Confira nossas redes</h1>
                    <BoxIcons>
                        {linkItems.map((item) =>
                            <Link href="/">
                                <Image src={item.icon} alt={item.alt} width={50} />
                            </Link>
                        )}
                    </BoxIcons>
                </Box>
            </Content>
            <FooterCopyRight>
                <span>HVEX © 2021 | Todos os direitos reservados.</span>
                <span>Políticas de Privacidade</span>
                <span>Termos de Uso</span>
            </FooterCopyRight>
        </Container>
    )
}
