import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { SocialIcon } from 'react-social-icons';
import '../styles/navBar.css'
import avatarImg from '../img/avatar.png'

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
const contacts = [['GitHub','https://github.com/TongyunHuang'],['LinkedIn','https://www.linkedin.com/in/tongyun-huang-930974149/']]

export default function NavBar(props) {
  const { classes } = props;
  return (
    
    
      <AppBar position="static" sx={{ background:'#3A403F' }}>
        <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
        <Avatar alt="Tongyun Huang" src={avatarImg} />
        </Box>

        <Box sx={{ flexGrow: 12 }}>
          {sessions.map((session)=>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {session}
          </Typography>)}
        </Box>

        <Box sx={{ flexGrow: 2}}>
          {contacts.map((contact)=>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <SocialIcon url={contact[1]} bgColor="#3A403F" fgColor="#ffffff"/>
              {contact[0]}
            </Typography>)}
        </Box>
          
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
   
  );
}

// export default withStyles(styles)(NavBar);
