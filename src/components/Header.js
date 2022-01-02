import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import '../styles/header.css'


export default function Header(props) {

  return (
    <div class="heroUnit">
      <div class="heroContent">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Hello, I'm Tongyun
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Currently a student at University of Illinois, Urbana-Champaign
        </Typography>
        <div class='heroButtons'>
          {/* <Grid container spacing={16} justify="center"> */}
          <Box sx={{marginLeft:'50%'}}>
            <KeyboardDoubleArrowDownIcon/>
          </Box>
          {/* </Grid> */}
        </div>
      </div>
    </div> 
      
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

