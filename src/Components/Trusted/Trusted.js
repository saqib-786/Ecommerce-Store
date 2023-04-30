import React from 'react';
import { Container,Box,styled} from '@mui/material';
import Para from '../CustomHeadings/Para';

const TrustedContainer = styled(Container)(({theme})=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    marginTop:'40px',
    
}))

function Trusted() {

  return (
    <React.Fragment>
        <Para sx={{marginTop:'40px',textAlign:'center',fontWeight:700,fontSize:'1.2rem'}}>Trusted 100+ Companies</Para>
        <TrustedContainer maxWidth="lg">
            <Box>
                <img width={'50px'} src='./Images/PSO.png' alt="PSO icon" />
            </Box>
            <Box>
                <img width={'100px'} src="./Images/Lucky.png" alt='Lucky-cement logo' />
            </Box>
            <Box>
                <img width={'80px'} src='./Images/FFC.png' alt='FFC logo' />
            </Box>
            <Box>
            <img width={'100px'} src='./Images/MCB.png' alt='MCB logo' />

            </Box>
            <Box>
            <img width={'80px'} src='./Images/K-electric.png' alt=' K-electric logo' />

            </Box>
        </TrustedContainer>
    </React.Fragment>
  )
}

export default Trusted