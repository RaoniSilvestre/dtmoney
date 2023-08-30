//import styled from "styled-components";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer } from 'miragejs';

function App() {

  createServer({
    routes() {
      this.namespace = 'api';
      this.get('/transactions', () => {
        return [
          {
            id: 1,
            title: 'transaction 1',
            amount: 400,
            type: 'deposit',
            category: 'Food',
            createdAt: new Date()
          }
        ]
      })
    },
  })
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;
