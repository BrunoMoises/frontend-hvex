import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.header};
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;

    a {
        position: absolute;
        left: 10%;
    }

    button {
        position: absolute;
        right: 20%;
    }
`

export const MenuItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    a {
        position: relative;
        text-decoration: none;
        color: ${(props) => props.theme.colors.white};
        
        label {
            cursor: pointer;
        }

        &:hover {
            color: ${(props) => props.theme.colors.blue2};
        }
    }
`