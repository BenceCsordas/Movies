import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import React from 'react'

export const PageLayout = ({title, children}) => {
  return (
    <Container  maxWidth={false}
     sx={{background:'linear-gradient(to right, #404040, #71717a)', 
        color:"whitesmoke", minHeight:'100vh', paddingBottom:"60px"
        
     }}>
        <Typography variant='h3' sx={{textTransform:'uppercase', fontWeight:'bold', letterSpacing:3, textAlign:'center',
        background:'linear-gradient(to right, #7dd3fc, #bbf7d0, #bef264)',
        WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
        p:'1rem'
        }}>{title}</Typography>
        <Box>{children}</Box>
    </Container>
  )
}