export type AnswerType = 'input' | 'radio' | 'checkbox'

export type Tinput = {
  type: 'input'
  answer: string;
};

export type Tcheckbox = {
  type: "checkbox";
  answer: string;
  isRight: boolean;
};

export type Tradio = {
  type: "radio";
  answer: string;
  isRight: boolean;
};

export type Answer = Tinput | Tradio | Tcheckbox 

export type Question = {
  id: number;
  questionText: string;
  type: AnswerType
  answersList: Answer[];
};
