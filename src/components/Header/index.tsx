import logo from "../../assets/Logo.svg";
import { Container, Content } from "./syles";

interface HeaderProps{
  handleOpenModal: () => void;
}


export function Header({handleOpenModal}:HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />
        <button type="button" onClick={handleOpenModal}>Nova transação</button>
      </Content>
    </Container>
  );
}
