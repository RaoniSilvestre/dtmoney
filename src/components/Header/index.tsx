import logo from '../../assets/Logo.svg'
import { Container, Content } from './syles'




export function Header() {
    return (
        <Container>
            <Content>
                <img src={logo} alt="" />
                <button type='button'>Nova transação</button>
            </Content>
        </Container>
    )
}