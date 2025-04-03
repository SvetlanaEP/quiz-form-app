import { Question } from "../types/types"

interface QuestinFormProps {
  questions: Question[];
  onDeleteQuestion: (id: number) => void
}

const QuestionsList: React.FC <QuestinFormProps> = ({questions, onDeleteQuestion}) => {
  return (
    <div>
      {questions.length === 0 ? (
        <p> Вопросов нет</p>
      ) : (
        questions.map((question) => {
          return (
            <div key={question.id}>
            <h3>{question.questionText}</h3>
            <div>

              {question.type==='input' ? (
                <input type="input" placeholder='Введите ответ'/>
                ) : 
                  question.type === 'radio' ? (
                    <>
                      { question.answersList.map((answer, index) => (
                        <label>
                          <input key={index} type="radio" name={`${question.id}`} />
                        {answer.answer}
                        </label>
                      ))
                      }
                    </>
                      
                    ) 
                : ( 
                  <>
                    { question.answersList.map((answer, index) => (
                      <label>
                        <input key={index} type="checkbox" name={`${question.id}`}/>
                        {answer.answer}
                      </label>
                    ))}
                  </>
                 )
              }
              <button onClick={() => {onDeleteQuestion(question.id)}}>Удалить вопрос</button>
            </div>
          </div>
          )
        })
      )}
    </div>
  )
}

export default QuestionsList