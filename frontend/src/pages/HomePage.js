import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';

const HomePage = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Container>
      <Typography variant="h2">
        {user ? `Welcome, ${user.username}` : 'Welcome to the Bakery!'}
      </Typography>
      <Typography variant="body1">
        {user ? 'Enjoy browsing our products.' : 'Please login or register to continue.'}
      </Typography>
    </Container>
  );
};

export default HomePage;
