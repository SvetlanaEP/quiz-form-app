import { useState } from "react"
import { Answer, AnswerType, Question, Tradio } from "../types/types"

interface QuestionCreatorProps {
  onAddQuestion: (newQuestion: Question) => void
}

const QuestionCreator: React.FC <QuestionCreatorProps> = ({onAddQuestion}) => {

  const [answerType, setAnswerType] = useState<AnswerType>('input') /* отображение контента для создания ответов при выборе варианта в выпадающем списке*/
  const [answers, setAnswers] = useState<Answer[]>([]) /*Это список созданных ответов */
  const [hasCorrectAnswers, setHasCorrentAnswers] = useState(true)
  
  const handleAddAnswer = () => {
    const newAnswer: Answer =
 {type: answerType, answer: '', isRight: false}

    setAnswers([...answers, newAnswer])
  }

  const handleIsRightChange = (index: number) => {
    if (answerType === 'radio') {
      setAnswers(answers.map((a, i) => ({...a, isRight: i===index})))
    } else {
      setAnswers(answers.map((a, i) => 
        i === index && 'isRight' in a ? { ...a, isRight: !a.isRight } : a
      ));
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Введите свой вопрос..."
      >
      </input>
      <select value={answerType} onChange={(e) => setAnswerType(e.target.value as AnswerType)}>
        <option value='input'>Текстовый ответ</option>
        <option value='radio'>Один вариант ответа</option>
        <option value='checkbox'>Несколько вариантов ответа</option>
      </select>
      <label>
        <input
          type="checkbox"
          checked={hasCorrectAnswers}
          onChange={()=> setHasCorrentAnswers(!hasCorrectAnswers)}
          >
        </input>
        Включить правильные ответы
      </label>

      {answerType !== 'input' && (
        <div> 
          {answers.map((answer, index) => {
            return (
            <div key={index}>
              <input
                type="text"
                placeholder="Вариант ответа"
                value={answer.answer}
              ></input>
              {hasCorrectAnswers && (
                <input
                  type={answerType}
                  checked={!!(answer as Tradio).isRight}
                  onChange={()=> handleIsRightChange(index)}
                >

                </input>
              )}
            </div>
          )
          })}
          <button onClick={handleAddAnswer}> Добавить вариант ответа</button>
        </div>
      )}
      {answerType === 'input' && (
        <div>
          <input
            type="text"
            placeholder="Введите ответ на вопрос"></input>
        </div>
      )}
    </div>
  )
}

export default QuestionCreator