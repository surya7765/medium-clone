import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';
import { Link, NavLink } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to='/'>
            <AppleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                SODIUM
            </Typography>
          </Link>
          <Button style={{
            fontSize:'x-small',
            padding:'0.5% 1% 0.5% 1%',
            borderStartEndRadius: '15% 50%',
            borderEndEndRadius: '15% 50%',
            borderTopLeftRadius: '15% 50%',
            borderBottomLeftRadius: '15% 50%'
            }} color="inherit">Our story</Button>
          <Button style={{
            fontSize:'x-small',
            padding:'0.5% 1% 0.5% 1%',
            borderStartEndRadius: '15% 50%',
            borderEndEndRadius: '15% 50%',
            borderTopLeftRadius: '15% 50%',
            borderBottomLeftRadius: '15% 50%'
          }} color="inherit">Membership</Button>
          <Button style={{
            fontSize:'x-small',
            padding:'0.5% 1% 0.5% 1%',
            borderStartEndRadius: '25% 50%',
            borderEndEndRadius: '25% 50%',
            borderTopLeftRadius: '25% 50%',
            borderBottomLeftRadius: '25% 50%'
            }} color="inherit">Write</Button>
          <Button style={{
            fontSize:'x-small',
            padding:'0.5% 1% 0.5% 1%',
            borderStartEndRadius: '25% 50%',
            borderEndEndRadius: '25% 50%',
            borderTopLeftRadius: '25% 50%',
            borderBottomLeftRadius: '25% 50%'
            }} color="inherit">
              <NavLink style={{textDecoration:'none', color:'inherit'}} to='/login' >Sign in</NavLink>
            </Button>
            <Button style={{
              fontSize:'x-small',
              padding:'0.5% 1% 0.5% 1%',
              borderStartEndRadius: '15% 50%',
              borderEndEndRadius: '15% 50%',
              borderTopLeftRadius: '15% 50%',
              borderBottomLeftRadius: '15% 50%'
              }} color="inherit">
                <Link style={{textDecoration:'none', color:'inherit'}} to='/register'>Get Started</Link>
              </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}