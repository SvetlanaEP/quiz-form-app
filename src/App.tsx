import './App.css'
import QuestionDisplay from './components/QuestionDisplay'
import { questionsData } from './QuestionData'

const App: React.FC = () => {


  return (
    <div>
      <h1>Создай свой тест</h1>
      <QuestionDisplay questions={questionsData}></QuestionDisplay>
    </div>
  )
}

export default App
