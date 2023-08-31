
import Modal from "react-modal"
import { Container } from "./styled";

interface ModalPopUpProps{

    isOpen: boolean;

}

Modal.setAppElement('#root')

export function ModalPopUp({isOpen}:ModalPopUpProps) {

    return(
        <Modal
        isOpen={isOpen}
        >
            <Container>
            <h1>oii haha</h1>
            </Container>
        </Modal>
    )
}