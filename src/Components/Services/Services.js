import React from 'react';
import { Container,Box } from '@mui/material';
import './style.css';
import {TbTruckDelivery} from 'react-icons/tb';
import {GiReceiveMoney} from 'react-icons/gi';
import {GiCheckedShield} from 'react-icons/gi';
import {BsFillShieldLockFill} from 'react-icons/bs';
import Para from '../CustomHeadings/Para';



function Services() {
  return (
    <React.Fragment>
     <Container className='grid-container' component={'div'}>
        <Box className='service-grid' component={'div'}>
            <TbTruckDelivery className='service-icon'/>
            <Para sx={{marginTop:'20px'}}>Supports Fast and Free Delivery</Para>
        </Box>
        <Box className='grid-serivce'  component={'div'}>
        <Box className='service-item' component={'div'}>
          <GiReceiveMoney className='service-icon'/>
          <Para sx={{margin:'15px 0px 0px 10px'}}>Money Back Guaranteed</Para>
        </Box>
        <Box className='service-item' component={'div'}>
          <GiCheckedShield className='service-icon'/>
          <Para sx={{margin:'0px 14px'}}>Non Contact Shipping</Para>
        </Box>
        </Box>
        <Box className='service-grid' compotent={'div'}>
        <BsFillShieldLockFill className='service-icon' />
        <Para sx={{marginTop:'20px'}}>Super Secure Payment System</Para>

        </Box>
     </Container>

    </React.Fragment>
  )
}

export default Services