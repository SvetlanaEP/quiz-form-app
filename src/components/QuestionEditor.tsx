import QuestionCreator from './QuestionCreator'
import QuestionsList from './QuestionsList'
import { Question } from '../types/types'

interface QuestionEditorProps {
  questions: Question[];
  onAddQuestion: (newQuestion: Question) => void;
  onDeleteQuestion: (id: number) => void
}

const QuestionEditor: React.FC <QuestionEditorProps>= ({questions, onAddQuestion, onDeleteQuestion}) => {

    return (
      <div>
        <h1>Создай свой тест</h1>
        <QuestionCreator onAddQuestion={onAddQuestion}></QuestionCreator>
        <h2>Текущий тест:</h2>
        <QuestionsList questions={questions} onDeleteQuestion={onDeleteQuestion}></QuestionsList>
      </div>
    )
}

export default QuestionEditor