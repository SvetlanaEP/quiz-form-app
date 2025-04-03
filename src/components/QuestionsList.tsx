import { Question } from "../types/types"

interface QuestinFormProps {
  questions: Question[];
}

const QuestionsList: React.FC <QuestinFormProps> = ({questions}) => {
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
           
            </div>
          </div>
          )
        })
      )}
    </div>
  )
}

export default QuestionsList