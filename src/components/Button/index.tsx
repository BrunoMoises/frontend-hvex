import { ReactNode } from "react";
import { ButtonIcon } from "./styles"

interface ButtonProps {
    children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
    return (
        <ButtonIcon>
            {children}
        </ButtonIcon>
    )
}
