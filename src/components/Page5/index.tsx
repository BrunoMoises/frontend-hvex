import Image from "next/image"
import { Container, Content, Titulo, List } from "./styles"
import check from "./icon/check.png"

const listItems = [
    {
        label: 'Balanço energético'
    },
    {
        label: 'Auto-diagnóstico dos transformadores',
    },
    {
        label: 'Medidor ideal para consumidores comerciais, industriais',
    },
    {
        label: 'À prova de fraude',
    },
    {
        label: 'Melhoria dos Indicadores de Continuidade',
    },
    {
        label: 'Maior vida útil do ativo',
    },
    {
        label: 'Acompanhamento em tempo real das condições do equipamento',
    },
]

export const Page5 = () => {
    return (
        <Container>
            <Content>
                <Titulo>Desenvolvido para melhorar a performance dos ativos de distribuição</Titulo>
                <List>
                    {listItems.map(item => (
                        <li key={item.label}>
                            <Image src={check} alt="Check" width={20} />
                            <span>{item.label}</span>
                        </li>
                    ))}
                </List>
            </Content>
        </Container>
    )
}
