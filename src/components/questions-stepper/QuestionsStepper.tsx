import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export type QuestionsStepperProps = {
  activeStep: number;
  setActiveStep: (step: number) => void;
  totalCount: number;
}

export default function QuestionsStepper({ activeStep, setActiveStep, totalCount }: QuestionsStepperProps) {
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (<>
      <MobileStepper
        variant="progress"
        steps={totalCount}
        position="static"
        activeStep={activeStep}
        sx={{ flexGrow: 1 }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === totalCount - 1}>
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </>
  );
}
