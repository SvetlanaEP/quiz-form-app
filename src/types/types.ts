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

export type Question = {
  id: number;
  questionText: string;
  type: 'input' | 'radio' | 'checkbox'
  answersList: Tinput[] | Tradio[] | Tcheckbox[];
};
