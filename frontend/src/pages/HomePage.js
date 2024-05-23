import React,  { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from '../redux/actions/profileActions';
import { Container, Typography } from '@mui/material';

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  
  useEffect(()=> {
    if (!user) {
      dispatch(getProfile());
    }
}, [dispatch, user])

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
