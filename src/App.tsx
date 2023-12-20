//import styled from "styled-components";
import { useState } from "react";
import Modal from "react-modal";
import { ModalPopUp } from "./components/Modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

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
    <>
      <Header handleOpenModal={handleOpenModal}/>
      <Dashboard />
      <GlobalStyle />
      <ModalPopUp
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      />
    </>
  );
}

export default App;
