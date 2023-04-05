import React from 'react';
import { Typography, styled } from '@mui/material';

const H1 = styled (Typography)(({theme})=>({
    fontFamily: 'Poppins',
    fontSize:'4rem',
    fontWeight:800
}))

function Typo1({children,...otherProps}) {
  return (
   <React.Fragment>
    <H1 {...otherProps}>{children}</H1>
   </React.Fragment>
  )
}

export default Typo1