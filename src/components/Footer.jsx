// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box mt={5} py={3} bgcolor="primary.main" color="white" textAlign="center">
      <Typography variant="body1">© 2024 My Portfolio</Typography>
      <Box mt={1}>
        <Link href="https://github.com/birajkashyap" color="inherit" target="_blank" rel="noopener">
          <FaGithub style={{ margin: '0 10px' }} />
        </Link>
        <Link href="https://www.linkedin.com/in/biraj-kashyap-2194b0226/" color="inherit" target="_blank" rel="noopener">
          <FaLinkedin style={{ margin: '0 10px' }} />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
