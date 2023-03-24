import { ReactNode } from "react";
import { Container, Footer, Header } from "./styles";

interface AppTemplateProps {
    children: ReactNode;
}

export const AppTemplate = ({ children }: AppTemplateProps) => (
    <Container>
        <Header>
            aa
        </Header>
        {children}
        <Footer>
            aa
        </Footer>
    </Container>
)