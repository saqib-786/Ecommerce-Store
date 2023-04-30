import React from 'react';
import {Container,Box,TextField,styled} from '@mui/material';
import Typo1 from '../Components/CustomHeadings/Typo1';
import '../App.css';
import Para from '../Components/CustomHeadings/Para';
import CustomButton from '../Components/CustomButton/CustomButton';

let style = {
  display: "flex",
  justifyContent:'space-between',
  padding:'5% 10%',
 

}

let boxStyle = {
  display:'flex',
  alignItems:'start',
  margin:'40px 0px'
};

const CustomInput = styled(TextField)((theme)=>({
  width:'100%',
  color:'white',
  fontSize:'1.2em',
  margin:'20px 0px',
 '& .MuiOutlinedInput-root':{
  '& fieldset':{
    borderColor:'white',
    color:'white'
    

  },
  '&:hover fieldset':{
    borderColor:'#2196f3',
  },
  '& ::placeholder':{
    color:'white',
    fontSize:'1.2em'
  },
  
  '& .Mui-focused fieldset':{
    borderColor:"#2196f3"
  },
  '& multilineColor':{
    color:'white'
  }
 }
}))

// const CustomInput = styled(TextField)`
// & MuiOutlinedInput-root{
//   & fieldset{
//     borderColor:'white';

//   }
// }

// `

function Contact() {
  return (
    <>
    <section id='contact-section'>
      <Typo1
      sx={{
        fontSize:'2em',
        textAlign:'center',
        
      }}
      >Contacut Us</Typo1>
      <Container className='contact-container' component={'div'} sx={style} maxWidth="xl">
        <Box id="contact-icon-box" component='div'>
          <Box className='contact-box' sx={boxStyle} component={'div'}>
            
            <div className='img-box'>
            <img src='./Images/marker.png' alt='marker' />
            </div>
            <div>
            <Para sx={{color:"#2196f3",fontSize:{lg:'1.5em',sm:'1.2em',xs:'1em'}}}>Address</Para>
            <Para sx={{fontSize:{sm:'1em',xs:'1em'}}}>110 Sugar Camp Road Hyderabad <br/> Sindh Pakistan</Para>
            </div>
            

          </Box>
          <Box sx={boxStyle} component={'div'}>
          <div className='img-box'>
            <img src='./Images/phone.png' alt='marker' />
            </div>
            <div>
            <Para sx={{color:"#2196f3",fontSize:{lg:'1.5em',sm:'1.2em',xs:'1em'}}}>Phone</Para>
            <Para>+923463837369</Para>
            </div>
          </Box>
          <Box sx={boxStyle} component={'div'}>
          <div className='img-box'>
            <img src='./Images/email.png' alt='marker' />
            </div>
            <div>
            <Para sx={{color:"#2196f3",fontSize:{lg:'1.5em',sm:'1.2em',xs:'1em'}}}>Email</Para>
            <Para>my-e-store@gmail.com</Para>
            </div>
          </Box>
        </Box>
        <Box id='form-box' component='div'>
          <Box component={'div'}>
            <Para 
            sx={{
              fontSize:'1.5em'
            }}
            >Send Message</Para>
            <form action="https://formspree.io/f/myyaozed" method="POST">
              <CustomInput name='userName' required InputLabelProps={{className:'textfield__label'}}  placeholder='Full Name'/>
              <CustomInput name='userEmail' required  placeholder='Email'/>
              <CustomInput name='userPhoneNumber' required placeholder='Phone Number'/>
              <CustomInput name="userMessag" multiline='true'  placeholder='Message'/>
              <CustomButton type="submit">
                Send
              </CustomButton>
            </form>

          </Box>
        </Box>
      </Container>
    </section>
    </>
  )
}

export default Contact