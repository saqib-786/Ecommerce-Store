import React from 'react';
import { Container } from '@mui/material';
import {styled} from '@mui/material';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';

const CustomContainer = styled(Container)(({theme,variant,color})=>({
    backgroundColor:'whitesmoke',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    

    

}))
function Header() {
  return (
    <React.Fragment>

        <header>
        <CustomContainer maxWidth="">
            <h1><Link to={'/'}>LOGO</Link></h1>
            <Nav/>
        </CustomContainer>
        </header>

    </React.Fragment>
  )
}

export default Header