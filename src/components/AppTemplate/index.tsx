import { ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Container } from "./styles";

interface AppTemplateProps {
    children: ReactNode;
}

export const AppTemplate = ({ children }: AppTemplateProps) => (
    <Container>
        <Header />
        {children}
        <Footer />
    </Container>
)