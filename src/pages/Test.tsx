import data from '../resources/questions.json';
import { Question, QuestionsPayload } from '../types/Questions';
import { QuestionCard } from 'src/components/question-card/QuestionCard.tsx';

export const Test = () => {
  const questions: QuestionsPayload = data;

  return <>{questions && questions.questions.map((question: Question) => (<QuestionCard question={question} />))}</>;
};
