import { Question } from "./types/types";

export const questionsData: Question[] = [
  {
    id: 1,
    type: 'radio',
    hasCorrectAnswers: false,
    questionText: "Можно выбрать один вариант ответа",
    answersList: [
      { type: "radio", answer: "Ну попробуй", isRight: false },
      { type: "radio", answer: "Выбери два", isRight: false },
      { type: "radio", answer: "Можно", isRight: false }
    ]
  },
  {
    id: 2,
    type: 'checkbox',
    hasCorrectAnswers: false,
    questionText: "Можно выбрать несколько вариантов ответа?",
    answersList: [
      { type: "checkbox", answer: "Да", isRight: true },
      { type: "checkbox", answer: "Конечно", isRight: true },
      { type: "checkbox", answer: "Несомненно", isRight: false }
    ]
  },
  {
    id: 3,
    type: 'input',
    hasCorrectAnswers: false,
    questionText: "Что такое React?",
    answersList: [{ type: "input", answer: "", isRight: false }]
  }
];
