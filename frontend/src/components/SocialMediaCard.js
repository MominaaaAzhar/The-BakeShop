import React from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const SocialMediaCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Follow Us
        </Typography>
        <Box display="flex" justifyContent="center">
          <IconButton aria-label="Facebook" href="https://www.facebook.com" target="_blank">
            <Facebook />
          </IconButton>
          <IconButton aria-label="Twitter" href="https://www.twitter.com" target="_blank">
            <Twitter />
          </IconButton>
          <IconButton aria-label="Instagram" href="https://www.instagram.com" target="_blank">
            <Instagram />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SocialMediaCard;
