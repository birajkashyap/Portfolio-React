// src/components/Contact.js
import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const initialValues = { name: '', email: '', message: '' };
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    message: Yup.string().required('Required'),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log('Form data', values);
    resetForm();
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Contact Me
      </Typography>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <Box marginBottom={2}>
              <Field as={TextField} name="name" label="Name" fullWidth />
              <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
            </Box>
            <Box marginBottom={2}>
              <Field as={TextField} name="email" label="Email" type="email" fullWidth />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </Box>
            <Box marginBottom={2}>
              <Field as={TextField} name="message" label="Message" multiline rows={4} fullWidth />
              <ErrorMessage name="message" component="div" style={{ color: 'red' }} />
            </Box>
            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Contact;
