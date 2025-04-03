import { useState } from 'react'
import './App.css'


import QuestionDisplay from './components/QuestionDisplay'
import QuestionEditor from './components/QuestionEditor'

import { questionsData } from './QuestionData'


const App: React.FC = () => {
const [isEditing, setIsEditing] = useState(true)



  return (
    <div>
      <button onClick={()=> {setIsEditing(!isEditing)}}>
        {isEditing ? 'Перейти к тесту' : 'Редактировать тест'}
      </button>
      
      { isEditing ? (
        <QuestionEditor></QuestionEditor> ) : (
          <QuestionDisplay questions={questionsData}></QuestionDisplay>
        )
      }

    </div>
  )
}

export default App
