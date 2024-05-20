import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
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
    <Container>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={onSubmit}>
        <TextField
          label="Email"
          name="email"
          fullWidth
          value={email}
          onChange={onChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          value={password}
          onChange={onChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
