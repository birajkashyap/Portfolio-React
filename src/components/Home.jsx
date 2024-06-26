// src/components/Home.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Container>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Typography variant="h1" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h6">
          I am a passionate developer who loves to create beautiful and functional web applications.
        </Typography>
      </motion.div>
    </Container>
  );
};

export default Home;
