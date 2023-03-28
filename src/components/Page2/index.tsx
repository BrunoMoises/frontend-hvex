import Image from "next/image"
import { Container, Content, Titulo, Descricao, List } from "./styles"
import check from "./icon/check.png"

const listItems = [
    {
        label: 'Monitoramento inteligente de ativos'
    },
    {
        label: 'Melhoria dos indicadores de continuidade',
    },
    {
        label: 'Comunicação Modular',
    },
    {
        label: 'Business Inteligence',
    },
    {
        label: 'Redução de Perdas técnicas e Não técnicas',
    }
]

export const Page2 = () => {
    return (
        <Container>
            <Content>
                <Titulo>Seja bem-vindo a era da energia inteligente</Titulo>
                <Descricao>As redes inteligentes são um caminho sem volta,  o desenvolvimento e disceminação de dispositivos de medição e monitoramento são as ferramentas para redução de custos, perdas e trazem mais previsibilidade para as utilities de energia.</Descricao>
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
