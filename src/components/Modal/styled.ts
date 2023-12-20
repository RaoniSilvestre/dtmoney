import styled from "styled-components";
import { darken, lighten } from "polished";

export const Container = styled.form`
  h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    margin-top: 1rem;
    color: #FFF;
    border-radius: 0.25rem;
    font-size: 1rem;
    border: 0;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`


export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button{
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.3s;
    &:hover{
      border-color: ${darken(0.25, '#d7d7d7')};
    }

    span{
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }
  
  }

  .green{
    transition: background-color 0.5s;
    background-color: ${lighten(0.3, '#33CC95')};
  }

  .red{
    transition: background-color 0.5s;
    background-color: ${lighten(0.3, '#E52E4D')};
  }

`

export const RadioBox = styled.button`
  border: 1px solid #d7d7d7;
  height: 4rem;
  border-radius: 0.25rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  span{
    font-size: 1rem;
    display: inline-block;
    margin-left: 1rem;
    color: var(--text-title);
    
  }

  img{
    width: 20px;
    height: 20px;
  }

  transition: border-color 0.2s;

  &:hover{
    border-color: ${darken(0.25, '#d7d7d7')};
  }
`