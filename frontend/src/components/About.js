import React from 'react';
import { Container, Typography, Box, Grid, Avatar } from '@mui/material';
import SocialMediaCard from './SocialMediaCard';

const teamMembers = [
  {
    name: 'Momina Azhar',
    role: 'Head Baker',
    bio: 'Momina has been baking for over 20 years and is known for her delicious pastries and breads.',
    photo: '',
  },
];

const About = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Box mb={3}>
        <Typography variant="body1">
          Our bakery is dedicated to bringing you the freshest and most delicious baked goods. Our team of expert bakers and pastry chefs work tirelessly to create treats that not only taste great but also look amazing.
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box textAlign="center" display="flex" flexDirection="column" alignItems="center">
              <Avatar alt={member.name} src={member.photo} style={{ width: 100, height: 100, margin: '0 auto' }} />
              <Typography variant="h6" gutterBottom>
                {member.name}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {member.role}
              </Typography>
              <Typography variant="body2">
                {member.bio}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box mt={5}>
        <SocialMediaCard />
      </Box>
    </Container>
  );
};

export default About;
