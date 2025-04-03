import QuestionCreator from './QuestionCreator'
import QuestionsList from './QuestionsList'
import { Question } from '../types/types'

interface QuestionEditorProps {
  questions: Question[];
  onAddQuestion: (newQuestion: Omit<Question, 'id'>) => void;
}

const QuestionEditor: React.FC <QuestionEditorProps>= ({questions, onAddQuestion}) => {

    return (
      <div>
        <h1>Создай свой тест</h1>
        <QuestionCreator onAddQuestion={onAddQuestion}></QuestionCreator>
        <h2>Текущий тест:</h2>
        <QuestionsList questions={questions}></QuestionsList>
      </div>
    )
}

export default QuestionEditor