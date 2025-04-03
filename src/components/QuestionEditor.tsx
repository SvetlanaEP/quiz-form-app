import { useState } from 'react'
import { Question } from '../types/types'
import QuestionCreator from './QuestionCreator'

const QuestionEditor: React.FC = () => {

    const handleAddQuestion = (newQuestion: Question) => {
      const [questions, setQuestions] = useState<Question[]>([])
      setQuestions([...questions, {...newQuestion, id: questions.length+1}])
    }

    return (
      <div>
        <h1>Создай свой тест</h1>
        <QuestionCreator onAddQuestion={handleAddQuestion}></QuestionCreator>
      </div>
    )
}

export default QuestionEditor