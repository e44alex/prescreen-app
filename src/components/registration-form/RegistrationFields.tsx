import React from 'react';
import { Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';

export function RegistrationFields() {

  return (<React.Fragment>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="First name"
          fullWidth
          autoComplete="given-name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="lastName"
          name="lastName"
          label="Last name"
          fullWidth
          autoComplete="family-name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField required
                   id="Email"
                   label="Email"
                   type="email"
                   fullWidth
                   autoComplete="email"
                   variant="standard" />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="notifyResults" value="yes" />}
          label="Send my results on this e-mail"
        />
      </Grid>
    </Grid>
  </React.Fragment>);
}
