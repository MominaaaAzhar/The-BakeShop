import React, { useState } from 'react';
import { Container, Typography, Paper, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button } from '@mui/material';
import cupcakeImage from '../assets/cupcake.jpg'

const Dashboard = () => {
  const [size, setSize] = useState('small');
  const price = 400;

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <Container>
      <Paper sx={{ p: 3, mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Cupcake Selection
        </Typography>
        <img
          src={cupcakeImage}
          alt="Cupcake"
          style={{ width: '100%', maxWidth: '300px', margin: 'auto', display: 'block' }}
        />
        <FormControl component="fieldset" sx={{ mt: 3 }}>
          <FormLabel component="legend">Select Size</FormLabel>
          <RadioGroup aria-label="size" name="size" value={size} onChange={handleChange} row>
            <FormControlLabel value="small" control={<Radio />} label="Small" />
            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
            <FormControlLabel value="large" control={<Radio />} label="Large" />
          </RadioGroup>
        </FormControl>
        <Typography variant="h5" sx={{ mt: 3 }}>
          Price: {price}rs
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          Order Now
        </Button>
      </Paper>
    </Container>
  );
};

export default Dashboard;
