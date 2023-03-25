import styled from 'styled-components'

export const ButtonIcon = styled.button`
    background-color: transparent;
    padding: 10px;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.blue2};
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors.blue2};
    &:hover {
        background-color: ${(props) => props.theme.colors.blue2};
        color: ${(props) => props.theme.colors.white};
    }
`