import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Model, createServer } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Monitoria',
          type: 'deposit',
          category: 'Desenvolvimento',
          value: 700,
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Hamburgão',
          type: 'withdraw',
          category: 'Alimentação',
          value: 30,
          createdAt: new Date()
        },
        {
          id: 3,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          value: 600,
          createdAt: new Date()
        }
      ]
    })
  },


  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  },


})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
