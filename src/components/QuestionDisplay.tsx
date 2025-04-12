
import React from "react";
import { Question} from "../types/types"
import { DisplayWrapper, QuestionCard, DisplayTitle, AnswerItem, 
  QuestionText, Input, AnswerBlock, ListWrapper } from "./QuestionDisplay.styles";

interface QuestinFormProps {
  questions: Question[];
}

const QuestionDisplay: React.FC<QuestinFormProps> = ({questions}) => {
  return (
    <DisplayWrapper>
      <DisplayTitle>Пожалуйста, ответье на вопросы</DisplayTitle>
      <ListWrapper>
      {questions.map((question) => {
        return (
          <QuestionCard key={question.id}>
            <QuestionText>{question.questionText}</QuestionText>
            <div>

              {question.type==='input' ? (
                <Input type="input" placeholder='Введите ответ'/>
                ) : 
                  question.type === 'radio' ? (
                    <AnswerBlock>
                      { question.answersList.map((answer, index) => (
                        <AnswerItem>
                          <input key={index} type="radio" name={`${question.id}`} />
                        {answer.answer}
                        </AnswerItem>
                      ))
                      }
                    </AnswerBlock>
                      
                    ) 
                : ( 
                  <AnswerBlock>
                    { question.answersList.map((answer, index) => (
                      <AnswerItem>
                        <input key={index} type="checkbox" name={`${question.id}`}/>
                        {answer.answer}
                      </AnswerItem>
                    ))}
                  </AnswerBlock>
                 )
              }
           
            </div>
          </QuestionCard>
        )
      })}
      </ListWrapper>
    </DisplayWrapper>
  )
}

export default QuestionDisplay