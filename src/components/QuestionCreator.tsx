import { useState } from "react"
import { Answer, AnswerType, Question, Tradio } from "../types/types"
import { questionsData } from "../QuestionData"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 20px;
  background: #fefefe;
  border: 1px solid #ddd;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin: 16px 0 8px;
`;

const Input = styled.input`
  padding: 8px;
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const InputRadio = styled.input`
  padding: 8px;
  width: auto;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 8px;
  width: 100%;
`;

const AnswerBlock = styled.div`
  margin: 10px 0;
`;

const AnswerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

const AddButton = styled.button`
  padding: 6px 10px;
  background-color: darkcyan;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: darkcyan;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

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
    <Wrapper>
      <Input
        type="text"
        placeholder="Введите свой вопрос"
        value={questionText}
        onChange={(e)=> setQuestionText(e.target.value)}
      >
      </Input>
      <Select value={answerType} onChange={(e) => setAnswerType(e.target.value as AnswerType)}>
        <option value='input'>Текстовый ответ</option>
        <option value='radio'>Один вариант ответа</option>
        <option value='checkbox'>Несколько вариантов ответа</option>
      </Select>
      <Label>
        <input
          type="checkbox"
          checked={hasCorrectAnswers}
          onChange={()=> setHasCorrentAnswers(!hasCorrectAnswers)}
          >
        </input>
        Включить правильные ответы
      </Label>

      {answerType !== 'input' && (
        <AnswerBlock> 
          {answers.map((answer, index) => {
            return (
            <AnswerRow key={index}>
              <Input
                type="text"
                placeholder="Вариант ответа"
                value={answer.answer}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
              ></Input>
              {hasCorrectAnswers && (
                <InputRadio
                  type={answerType}
                  checked={!!(answer as Tradio).isRight}
                  onChange={()=> handleIsRightChange(index)}
                >
                </InputRadio>
              )}
            </AnswerRow>
          )
          })}
          <AddButton onClick={handleAddAnswer}> Добавить вариант ответа</AddButton>
        </AnswerBlock>
      )}
      {answerType === 'input' && hasCorrectAnswers && (
        <div>
          <Input
            type="text"
            placeholder="Введите ответ на вопрос"
            value={textAnswer}
            onChange={(e) => setTextAnswer(e.target.value)}
            ></Input>
        </div>
      )}
      <SubmitButton onClick={handleCreateQuestion} disabled={isSubmitDisabled}>Создать вопрос</SubmitButton>
    </Wrapper>
  )
}

export default QuestionCreator