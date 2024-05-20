import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ username, email, password }, navigate));
  };

  return (
    <Container>
      <Typography variant="h4">Register</Typography>
      <form onSubmit={onSubmit}>
        <TextField
          label="Username"
          name="username"
          fullWidth
          value={username}
          onChange={onChange}
        />
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
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
