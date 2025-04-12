import { Question } from "../types/types"
import { ListWrapper, QuestionCard, AnswersList, AnswerItem, DeleteButton, Input } from "./QuestionsList.styles";


interface QuestinFormProps {
  questions: Question[];
  onDeleteQuestion: (id: number) => void
}

const QuestionsList: React.FC <QuestinFormProps> = ({questions, onDeleteQuestion}) => {
  return (
    <ListWrapper>
      {questions.length === 0 ? (
        <p> Вопросов нет</p>
      ) : (
        questions.map((question) => {
          return (
            <QuestionCard key={question.id}>
            <h3>{question.questionText}</h3>
            <ListWrapper>

              {question.type==='input' ? (
                <Input type="input" placeholder='Введите ответ'/>
                ) : 
                  question.type === 'radio' ? (
                    <AnswersList>
                      { question.answersList.map((answer, index) => (
                        <AnswerItem key={index}>
                          <input  type="radio" name={`${question.id}`} />
                        {answer.answer}
                        </AnswerItem>
                      ))
                      }
                    </AnswersList>
                      
                    ) 
                : ( 
                  <AnswersList>
                    { question.answersList.map((answer, index) => (
                      <AnswerItem key={index}>
                        <input  type="checkbox" name={`${question.id}`}/>
                        {answer.answer}
                      </AnswerItem>
                    ))}
                  </AnswersList>
                 )
              }
              <DeleteButton onClick={() => {onDeleteQuestion(question.id)}}>Удалить вопрос</DeleteButton>
            </ListWrapper>
          </QuestionCard>
          )
        })
      )}
    </ListWrapper>
  )
}

export default QuestionsList