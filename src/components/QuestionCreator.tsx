import { useState } from "react"
import { Answer, AnswerType, Question, Tradio } from "../types/types"
import { questionsData } from "../QuestionData"

interface QuestionCreatorProps {
  onAddQuestion: (newQuestion: Question) => void
}

const QuestionCreator: React.FC <QuestionCreatorProps> = ({onAddQuestion}) => {

  const [questionText, setQuestionText] = useState('')
  const [answerType, setAnswerType] = useState<AnswerType>('input') /* отображение контента для создания ответов при выборе варианта в выпадающем списке*/
  const [answers, setAnswers] = useState<Answer[]>([]) /*Это список созданных ответов */
  const [hasCorrectAnswers, setHasCorrentAnswers] = useState(false)/* Для выбора есть правильные ответы или нет */
  const [textAnswer, setTextAnswer] = useState('')
  
  const handleAddAnswer = () => {
    const newAnswer: Answer =
 {type: answerType, answer: '', isRight: false}

    setAnswers([...answers, newAnswer])
  }

  const handleAnswerChange = (index: number, value: string) => {
    const updatedAnswers =[...answers]
    updatedAnswers[index].answer = value
    setAnswers(updatedAnswers)
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

  const handleCreateQuestion = () => {

    const newQuestion: Question = {
      id: questionsData.length,
      type: answerType,
      questionText, 
      hasCorrectAnswers,
      answersList: answerType === 'input' ? [{type: 'input', answer: textAnswer, isRight: false}] : answers.map((a) => ({
        type: a.type,
        answer: a.answer,
        isRight: a.isRight,
      }))
    }
    console.log(newQuestion)
    onAddQuestion(newQuestion);

    setQuestionText('');
    setAnswers([])
    setTextAnswer('')
  }

  const isSubmitDisabled = !questionText || 
  (answerType !=='input' && (answers.length === 0 || hasCorrectAnswers && !answers.some((a) => a.isRight))) ||
  (answerType === 'input' && (hasCorrectAnswers && !textAnswer))

  return (
    <div>
      <input
        type="text"
        placeholder="Введите свой вопрос"
        value={questionText}
        onChange={(e)=> setQuestionText(e.target.value)}
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
                onChange={(e) => handleAnswerChange(index, e.target.value)}
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
      {answerType === 'input' && hasCorrectAnswers && (
        <div>
          <input
            type="text"
            placeholder="Введите ответ на вопрос"
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            ></input>
        </div>
      )}
      <button onClick={handleCreateQuestion} disabled={isSubmitDisabled}>Создать вопрос</button>
    </div>
  )
}

export default QuestionCreator