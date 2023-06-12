import { Box, Button, Container } from '@mui/material'
import React from 'react'

export default function LoginButton(props) {
  return (
    <Button 
    sx={{
      height: props.height,
      width: props.width,
      color:props.color,
      bgcolor: props.bg,
      border: props.border,
      textTransform: 'none',
      '&:hover': {
        color: props.hovercolor,
        backgroundColor: props.hoverbg,
        border: props.hoverborder
      },
    }} 
    variant='outlined' 
    color="secondary" 
    onClick={props.click}>

      <Box sx={{fontSize:'70%'}}>{props.name}</Box>

    </Button>
  )
}
