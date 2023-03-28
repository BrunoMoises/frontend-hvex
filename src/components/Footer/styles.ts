import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 323px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.secondary};
    position: relative;
    bottom: 0;

    a {
        position: absolute;
        left: 80px;
        top: 50px;
    }
`

export const Content = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    right: 10%;
    gap: 10px;
`

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 275px;

    h1 {
        position: absolute;
        bottom: 70px;
        font-size: 20px;
        color: ${(props) => props.theme.colors.blue2};
    }

    p {
        position: absolute;
        width: 230px;
        font-size: 16px;
        color: ${(props) => props.theme.colors.white};
    }
`

export const BoxIcons = styled.div`
    right: 8%;
    gap: 20px;
    bottom: 30px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        position: relative;
    }
`

export const FooterCopyRight = styled.div`
    display: flex;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    color: ${(props) => props.theme.colors.white};
    border-top: 1px solid ${(props) => props.theme.colors.white};
    bottom: 20px;

    span {
        margin-top: 20px;
    }
`