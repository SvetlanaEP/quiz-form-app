import QuestionCreator from './QuestionCreator'
import QuestionsList from './QuestionsList'
import { Question } from '../types/types'
import { EditorWrapper, EditorTitle, Divider } from './QuestionEditor.styles'

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