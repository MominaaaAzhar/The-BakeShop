import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const { firstName, lastName, username, email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ firstName, lastName, username, email, password }, navigate));
  };

  return (
    <Container>
      <Box p={4}>
      <Paper elevation={3}>
      <Box p={4}>
      <Typography variant="h4">Register</Typography>
      <form onSubmit={onSubmit}>
      <Box p={1}>
        <TextField
          label="First Name"
          name="firstName"
          fullWidth
          value={firstName}
          onChange={onChange}
          margin="normal"
        />
        </Box>
        <Box p={1}>
        <TextField
          label="Last Name"
          name="lastName"
          fullWidth
          value={lastName}
          onChange={onChange}
          margin="normal"
        />
        </Box>
        <Box p={1}>
        <TextField
          label="Username"
          name="username"
          fullWidth
          value={username}
          onChange={onChange}
          margin="normal"
        />
        </Box>
        <Box p={1}>
        <TextField
          label="Email"
          name="email"
          fullWidth
          value={email}
          onChange={onChange}
          margin="normal"
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
          margin="normal"
        />
        </Box>
        <Box p={1}>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
          Register
        </Button>
        </Box>
      </form>
      </Box>
      </Paper>
      </Box>
    </Container>
  );
};

export default Register;
