import data from '../resources/questions.json';
import { QuestionsPayload } from '../types/Questions';
import { useState } from 'react';
import QuestionsStepper from 'src/components/questions-stepper/QuestionsStepper.tsx';
import { QuestionCard } from 'src/components/question-card/QuestionCard.tsx';
import { Slide } from '@mui/material';

export const Test = () => {
  const questions: QuestionsPayload = data;
  const [index, setIndex] = useState(0);

  const question = questions.questions[index];

  return <>
    <QuestionsStepper activeStep={index} setActiveStep={setIndex} totalCount={questions.questions.length} />
    <Slide direction="left" in>
      <QuestionCard question={question} />
    </Slide>
  </>;
};
