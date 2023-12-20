import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styled";
import incomeImg from "./../../assets/Entradas.svg"
import outcomeImg from "./../../assets/Saídas.svg"
import closeImg from "./../../assets/Fechar.svg"
import { useState, FormEvent } from "react";
import { api } from "../../services/api";

interface ModalPopUpProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalPopUp({ isOpen, onRequestClose }: ModalPopUpProps) {

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, SetCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    console.log({title, value, category, type});

    const data = {
      title,
      value,
      category,
      type
    }
    
    api.post('/transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={"react-modal-content"}
      overlayClassName={"react-modal-overlay"}
    >
      
      {/* Botão de fechar modal */}
      <button type="button" onClick={onRequestClose} className="react-modal-close"><img src={closeImg} alt="fechar modal" /></button>
      
      
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        {/*Título */}
        <input 
        type="text" 
        placeholder="Título" 
        value = {title}
        onChange={event => setTitle(event.target.value)}
        />

        {/*Valor */}
        <input 
        type="number" 
        placeholder="Valor"
        value = {value}
        onChange={event => setValue(+event.target.value)}
        />

        {/*Tipo da transação */}
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => { setType('deposit') }}
          >
            <img src={incomeImg} alt="income" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === 'withdraw'}
            activeColor="red"
            onClick={() => { setType('withdraw') }}
          >
            <img src={outcomeImg} alt="outcome" />
            <span>Saída</span>
          </RadioBox>

        </TransactionTypeContainer>

        {/* Categoria */}
        <input 
        type="text" 
        placeholder="Categoria" 
        value = {category}
        onChange={event => SetCategory(event.target.value)}
        />

        {/* Botão de submit*/}
        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  );
}
