import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Header = styled.div`
    height: 70px;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.header};
    position: fixed;
    top: 0;
`

export const Footer = styled.div`
    height: 225px;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.secondary};
    position: fixed;
    bottom: 0;
`