import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import SocialMediaCard from './SocialMediaCard';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 31.481795,
  lng: 74.303923,
};

const Contact = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Box mb={3}>
        <Typography variant="h6">
          Bakery Address
        </Typography>
        <Typography variant="body1">
          FAST University, Faisal Town, Lahore, Pakistan
        </Typography>
        <Typography variant="body1">
          Phone: (042) 111-128-128
        </Typography>
        <Typography variant="body1">
          Email: info@bakery.com
        </Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="h6">
          Send Us a Message
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Send Message
          </Button>
        </form>
      </Box>
      <Box mt={5} mb={5}>
        <SocialMediaCard />
      </Box>
      <Box mb={3}>
        <Typography variant="h6">
          Our Location
        </Typography>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </Box>
    </Container>
  );
};

export default Contact;
