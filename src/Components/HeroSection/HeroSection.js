import React from 'react';
import { styled,Container,Box,} from '@mui/material';
import Typo1 from '../CustomHeadings/Typo1';
import Para from '../CustomHeadings/Para';
import CustomButton from '../CustomButton/CustomButton';
import './style.css';

const CustomContainer = styled(Container)(({theme})=>({
    maxWidth:'180px',
    margin:'50px auto',
    

}))



function HeroSection({title}) {

    
   
  return (
    <React.Fragment>
        <CustomContainer>
            <Container id='grid-container' component={'div'}>
                <Box className='grid-item' component={'div'}>
                    <Para sx={{color:'#2196f3'}}>Well Come to My eCommarce Store</Para>
                    <Typo1>{title}</Typo1>
                    <Para>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. esse fugit incidunt, ducimus, quidem soluta itaque et maiores praesentium 
                    
                    </Para>
                    <CustomButton>Shop Now</CustomButton>
                </Box>
                <Box className='grid-item image-container' component={'div'}>
                    <img width={'100%'} src='./Images/family.jpg' alt="family" />
                </Box>

            </Container>
        </CustomContainer>
    </React.Fragment>
  )
}

export default HeroSection