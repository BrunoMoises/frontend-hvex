import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 366px;
    left: 0px;
    background-color: ${(props) => props.theme.colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
`

export const Titulo = styled.div`
    width: 32%;
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: ${(props) => props.theme.colors.white};
    padding-bottom: 29px;
    border-bottom: 5px solid ${(props) => props.theme.colors.blue2};
`
