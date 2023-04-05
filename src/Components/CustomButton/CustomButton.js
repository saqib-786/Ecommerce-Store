import React from 'react';
import {styled,Button} from '@mui/material';
const CustomBtn = styled(Button)(({theme})=>({
    backgroundColor:'#2196f3',
    width:'150px',
    height: '40px',
    fontFamily:'Poppins',
    fontWeight:400,
    margin:'10px 0px',
    color:'white',
    
}))
function CustomButton({children,icon,...ohterProps}) {
  return (
    <React.Fragment>
        <CustomBtn sx={{'&:hover':{backgroundColor:'#1976d2'}}} {...ohterProps}>
            {icon && icon}
            {children}
        </CustomBtn>
    </React.Fragment>
  )
}

export default CustomButton;