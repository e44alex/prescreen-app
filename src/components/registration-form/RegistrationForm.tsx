import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React from 'react';
import { RegistrationFields } from 'src/components/registration-form/RegistrationFields.tsx';
export default function RegistrationForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Registration
          </Typography>
          <React.Fragment>
            <RegistrationFields />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                sx={{ mt: 3, ml: 1 }}
              >
                Next
              </Button>
            </Box>
          </React.Fragment>
        </Paper>
      </Container>
    </React.Fragment>
  );
}


