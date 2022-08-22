import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import { TextField } from "formik-material-ui";
import { FormStepper } from './stepper/FormStepper';
function App() {
  const linksGroup = {linkname: '', linkurl: ''};

  return (
        <Container sx={{ bgcolor: '#87c1ff4d', paddingY: 3, marginTop: 5 }}>
          <Typography variant='h3' align='center' component='h2'>
            Formik Form
          </Typography>
          <Card sx={{ marginTop: 2 }}>
            <CardContent sx={{ paddingY: 10, paddingX: 5 }}>
              <Formik>
              <FormStepper>
                <Form>
                  <Grid container spacing={2}>
                    <Grid item md={6}>
                      <Field
                        fullWidth
                        name='firstname'
                        component={TextField}
                        label='First Name'
                      />
                    </Grid>
                    <Grid item md={6}>
                      <Field
                        fullWidth
                        name='lastname'
                        component={TextField}
                        label='Last Name'
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant='h6' component='h2'>
                        Add Social Links
                      </Typography>
                    </Grid>
                    <Grid item md={5}>
                      <Field
                        fullWidth
                        name='linkname'
                        component={TextField}
                        label='Link Name'
                      />
                    </Grid>
                    <Grid item md={5}>
                      <Field
                        fullWidth
                        name='linkurl'
                        component={TextField}
                        label='Link URL'
                      />
                    </Grid>
                    <Grid item md={2}>
                      <Button variant='outlined' color='error'>
                        Delete
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant='outlined'>Add Link</Button>
                    </Grid>
                  </Grid>
                </Form>
                </FormStepper>
              </Formik>
            </CardContent>
          </Card>
        </Container>
  );
}

export default App;
