// src/components/About.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
      I am a seasoned full-stack web developer proficient in the MERN stack, TypeScript, and experienced in WebRTC and WebSockets. Additionally, I have extensive expertise in DevOps practices including Docker, Kubernetes, and CI/CD pipelines. My background includes significant project work and contributions to open-source initiatives.
      </Typography>
    </Container>
  );
};

export default About;
