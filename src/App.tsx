import './App.css'
import { useState } from 'react'
import QuestionCreator from './components/QuestionCreator'
import QuestionDisplay from './components/QuestionDisplay'
import { questionsData } from './QuestionData'
import { Question } from './types/types'

const App: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([])

  const handleAddQuestion = (newQuestion: Question) => {
    setQuestions([...questions, {...newQuestion, id: questions.length+1}])
  }


  return (
    <div>
      <h1>Создай свой тест</h1>
      <QuestionCreator onAddQuestion={handleAddQuestion}></QuestionCreator>
      <QuestionDisplay questions={questionsData}></QuestionDisplay>
    </div>
  )
}

export default App
