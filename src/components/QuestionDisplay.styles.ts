import styled from "styled-components";

export const DisplayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #fff;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    max-width: 800px;
    margin: 20px auto;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
`;

export const QuestionCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

export const DisplayTitle = styled.h2`
  font-size: 1.4rem;
  margin: 0;
  color: #333;
  text-align: center;
`
export const AnswerItem = styled.label`
display: flex;
align-items: center;
margin-bottom: 8px;
`;


export const QuestionText = styled.h3`
  font-size: 20px;
  color: #333;
  margin: 0;
`;
export const Input = styled.input`
  padding: 8px;
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

export const AnswerBlock = styled.div`
  margin: 10px 0;
`;