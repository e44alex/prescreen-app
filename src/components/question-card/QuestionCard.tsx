import { Question } from 'src/types/Questions';
import { shuffle } from 'src/utils/array.ts';
import { Card, CardContent, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

export type QuestionCardProps = {
  question: Question
}

export const QuestionCard = ({ question }: QuestionCardProps) => {

  return <>
    <Card sx={{ minWidth: 275, margin: 10 }}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          Question
        </Typography>
        <Typography variant="body2">
          <FormControl>
            <Typography color="text.primary" gutterBottom variant="h5">
              {question.text}
            </Typography>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {shuffle(question.options).map(option => (
                <FormControlLabel value="female" control={<Radio />} label={option.text} />
              ))}
            </RadioGroup>
          </FormControl>
        </Typography>
      </CardContent>
    </Card>
  </>;
};
