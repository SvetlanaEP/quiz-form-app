import QuestionCreator from './QuestionCreator'
import QuestionsList from './QuestionsList'
import { Question } from '../types/types'
import styled from 'styled-components'

const EditorWrapper = styled.div`
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

const EditorTitle = styled.h2`
  font-size: 1.4rem;
  margin: 0;
  color: #333;
  text-align: center;
`

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #ddd;
`;

interface QuestionEditorProps {
  questions: Question[];
  onAddQuestion: (newQuestion: Question) => void;
  onDeleteQuestion: (id: number) => void
}

const QuestionEditor: React.FC <QuestionEditorProps>= ({questions, onAddQuestion, onDeleteQuestion}) => {

    return (
      <EditorWrapper>
        <EditorTitle>Создай свой тест</EditorTitle>
        <QuestionCreator onAddQuestion={onAddQuestion}></QuestionCreator>
        <Divider />
        <EditorTitle>Текущий тест:</EditorTitle>
        <QuestionsList questions={questions} onDeleteQuestion={onDeleteQuestion}></QuestionsList>
      </EditorWrapper>
    )
}

export default QuestionEditor