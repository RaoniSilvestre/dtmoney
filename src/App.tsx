//import styled from "styled-components";
import { useState } from "react";
import Modal from "react-modal";
import { ModalPopUp } from "./components/Modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { TransactionProvider } from "./hooks/useTransactions";


Modal.setAppElement("#root"); //Acessibilidade

function App() {

  const  [isModalOpen, setIsModalOpen] = useState(false)

  function handleOpenModal(){
    setIsModalOpen(true)
  }

  function handleCloseModal(){
    setIsModalOpen(false)
  }

  return (
    <TransactionProvider>

      <Header handleOpenModal={handleOpenModal}/>
      <GlobalStyle />

      <Dashboard />
      
      <ModalPopUp
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      />
    </TransactionProvider>
  );
}

export default App;
