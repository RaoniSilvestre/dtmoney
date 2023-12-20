import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styled";
import incomeImg from "./../../assets/Entradas.svg"
import outcomeImg from "./../../assets/Saídas.svg"
import closeImg from "./../../assets/Fechar.svg"
import { useState } from "react";

interface ModalPopUpProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalPopUp({ isOpen, onRequestClose }: ModalPopUpProps) {

  const [type, setType] = useState('deposit')

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={"react-modal-content"}
      overlayClassName={"react-modal-overlay"}
    >
      
      {/* Botão de fechar modal */}
      <button type="button" onClick={onRequestClose} className="react-modal-close"><img src={closeImg} alt="fechar modal" /></button>
      
      
      <Container>
        <h2>Cadastrar transação</h2>

        {/*Título */}
        <input type="text" placeholder="Título" />

        {/*Valor */}
        <input type="number" placeholder="Valor" />

        {/*Tipo da transação */}
        <TransactionTypeContainer>
          <button
            type="button"
            className={type === 'deposit' ? 'green' : ''}
            onClick={() => { setType('deposit') }}
          >
            <img src={incomeImg} alt="income" />
            <span>Entrada</span>
          </button>

          <button
            type="button"
            className={type === 'withdraw' ? 'red' : ''}
            onClick={() => { setType('withdraw') }}
          >
            <img src={outcomeImg} alt="outcome" />
            <span>Saída</span>
          </button>

        </TransactionTypeContainer>

        {/* Categoria */}
        <input type="text" placeholder="Categoria" />

        {/* Botão de submit*/}
        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  );
}
