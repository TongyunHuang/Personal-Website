import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import '../styles/navBar.css'

// const styles = theme => ({
//   appBar: {
//     position: 'relative',
//     background: '#3A403F'
//   },
//   icon: {
//     marginRight: theme.spacing.unit * 2,
//   }
// });
//end of styling

// Define variables here
const sessions = ['About me', 'Projects', 'Timeline', 'Research', 'Resume']
const contact = ['GitHub', 'LinkedIn']

export default function NavBar(props) {
  const { classes } = props;
  return (
    
      <AppBar position="static">
        <Toolbar>
          <Box>
            <Avatar alt="Remy Sharp" src="/avatar.png" />
          </Box>
          <Typography variant="h6" color="inherit" noWrap>
            About me
          </Typography>
          
        </Toolbar>
      </AppBar>
    
  );
}

// export default withStyles(styles)(NavBar);
