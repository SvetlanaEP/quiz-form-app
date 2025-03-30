import { Question } from "./types/types";

export const questionsData: Question[] = [
  {
    id: 1,
    type: 'radio',
    hasCorrectAnswers: false,
    questionText: "Какой ваш любимый цвет?",
    answersList: [
      { type: "radio", answer: "Красный", isRight: false },
      { type: "radio", answer: "Синий", isRight: true },
      { type: "radio", answer: "Зеленый", isRight: false }
    ]
  },
  {
    id: 2,
    type: 'checkbox',
    hasCorrectAnswers: false,
    questionText: "Какой ваш любимый фрукт?",
    answersList: [
      { type: "checkbox", answer: "Яблоко", isRight: true },
      { type: "checkbox", answer: "Банан", isRight: true },
      { type: "checkbox", answer: "Апельсин", isRight: false }
    ]
  },
  {
    id: 3,
    type: 'input',
    hasCorrectAnswers: false,
    questionText: "Какая столица Франции?",
    answersList: [{ type: "input", answer: "Париж", isRight: false }]
  }
];
