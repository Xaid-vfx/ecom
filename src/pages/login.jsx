import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import './login.css';
import LoginButton from '../components/buttons/LoginButton';

export default function SignIn() {

  function handleClick() {
    console.log('click')
  }

  return (
    <Box sx={{display:'flex', alignItems:'center',height: '100vh', width: '100%', overflow: 'hidden', backdropFilter:"blur(5px)", backgroundColor:"#E8E8E8" }}>
      <div className='loginPageContainer'>
        <div className='imageLeft'>
          <img src="https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww&w=1000&q=80" alt="" />
        </div>
        <div className='loginRight'>
          <div className='loginRightWrapper'>
            <div className='loginRightWrapperUp'>
              <h2>Hi there</h2>
              <div className='inputBoxes'>
                <input type='text' placeholder='Email' />
                <input type='text' placeholder='Password' />
              </div>
              <div className='loginBtn'>
                <LoginButton hovercolor = "black" hoverborder="1px solid" hoverbg ='white' color= "white" border="1px solid" bg="black" height="75%"  name={'Log in'} click={handleClick} />
              </div>
            </div>
            <div className='loginRightWrapperDown'>
              <small>Dont have an account? <a>Sign Up</a></small>
              
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}