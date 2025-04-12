import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  background: #fefefe;
  border: 1px solid #ddd;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
`;

export const Label = styled.label`
  font-weight: bold;
  display: block;
  margin: 16px 0 8px;
`;

export const Input = styled.input`
  padding: 8px;
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

export const InputRadio = styled.input`
  padding: 8px;
  width: auto;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

export const Select = styled.select`
  padding: 8px;
  width: 100%;
`;

export const AnswerBlock = styled.div`
  margin: 10px 0;
`;

export const AnswerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

export const AddButton = styled.button`
  padding: 6px 10px;
  background-color: darkcyan;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: darkcyan;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;