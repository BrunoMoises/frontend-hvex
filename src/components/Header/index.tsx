import { Container, MenuItems } from './styles'
import logo from '../../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../Button'

const menuItems = [
    {
        label: 'Omni trafo'
    },
    {
        label: 'Sinalizador de faltas',
    },
    {
        label: 'Acoplador DP',
    }
]

export const Header = () => {
    return (
        <Container>
            <Link href="/">
                <Image src={logo} alt="HVEX" width={65} />
            </Link>
            <MenuItems>
                {menuItems.map((item) =>
                    <Link href="#">
                        <label>{item.label}</label>
                    </Link>
                )}
            </MenuItems>
            <Button>Comprar agora</Button>
        </Container>
    )
}
