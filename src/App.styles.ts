import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: azure;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: darkcyan;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: auto;
  margin: 20px auto;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;