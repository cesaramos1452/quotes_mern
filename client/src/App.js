import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import inspire from './assets/img/liveToInspre.png';

function App() {
  return (
    <Container maxWidth='lg'>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>
          Quotes
        </Typography>
        <img src={inspire} alt='inspire' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}>
            <Grid item xs={12} item sm={7}>
              
            </Grid>
            <Grid item xs={12} item sm={4}></Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;