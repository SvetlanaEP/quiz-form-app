import styled from "styled-components";

export const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  margin: 20px auto;
  `

export const EditorTitle = styled.h2`
  font-size: 1.4rem;
  margin: 0;
  color: #333;
  text-align: center;
`

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #ddd;
`;