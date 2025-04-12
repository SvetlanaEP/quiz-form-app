import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
`;
export const QuestionCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  background-color: #fafafa;
`;

export const AnswersList = styled.ul`
list-style: none;
padding-left: 0;
`;

export const AnswerItem = styled.li`
display: flex;
align-items: center;
gap: 8px;
margin-bottom: 6px;
`;

export const DeleteButton = styled.button`
background-color: #ff4d4f;
color: white;
border: none;
border-radius: 6px;
padding: 6px 10px;
font-size: 14px;
cursor: pointer;

&:hover {
  background-color: #d9363e;
}
`;

export const Input = styled.input`
padding: 8px;
width: 100%;
margin-bottom: 10px;
box-sizing: border-box;
`;