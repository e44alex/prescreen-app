export interface QuestionsPayload {
  questions: Question[];
}
export interface Question {
  text: string;
  options: AnswerOption[];
}

export interface AnswerOption {
  text: string;
  isCorrect: boolean;
}
