import React from 'react';
import { Typography,styled } from '@mui/material';

const P = styled(Typography)(({theme})=>({
    fontSize:'1rem',
    fontFamily:'Poppins',
    fontWeight:300,
    letterSpacing:'1px',
    
}))

function Para({children,...otherProps}) {
  return (
    <React.Fragment>
        <P {...otherProps}>{children}</P>
    </React.Fragment>
  )
}

export default Para