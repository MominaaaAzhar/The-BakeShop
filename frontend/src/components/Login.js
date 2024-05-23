import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }, navigate));
  };

  return (
    <Container mt={3}>
      <Box p={4}>
      <Paper elevation={3}>
        <Box p={4}>
          <Typography variant="h4">Login</Typography>
          <form onSubmit={onSubmit}>
            <Box p={1}>
              <TextField
                label="Email"
                name="email"
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Box>
            <Box p={1}>
              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                value={password}
                onChange={onChange}
              />
            </Box>
            <Box p={1}>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </Box>
          </form>
        </Box>
      </Paper>
      </Box>
    </Container>
  );
};

export default Login;
