import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import '../styles/header.css'


export default function Header(props) {

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div class="heroUnit">
          <div class="heroContent">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Hello, I'm Tongyun
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Currently a student at University of Illinois, Urbana-Champaign
            </Typography>
            <div class='heroButtons'>
              <Grid container spacing={16} justify="center">
              <KeyboardDoubleArrowDownIcon/>
              </Grid>
            </div>
          </div>
        </div> 
      </main>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

