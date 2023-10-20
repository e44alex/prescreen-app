import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes.tsx';
import { Alert, AppBar, Button, CssBaseline, Link, Snackbar, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const router = createBrowserRouter([
    ...routes,
  ]);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
          <Button onClick={handleClick}>Test alert</Button>
          <Link href="/admin">Administration</Link>
        </Toolbar>
      </AppBar>

      <RouterProvider router={router} />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a message!
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}

export default App;
