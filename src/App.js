import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Screens/About';
import Cart from './Screens/Cart';
import Contact from './Screens/Contact';
import ErrorPage from './Screens/ErrorPage';
import Home from './Screens/Home';
import Products from './Screens/Products';
import SingleProduct from './Screens/SingleProduct';
import { ThemeProvider } from '@mui/material';
import theme from './Config/Theme/Theme';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    
   <ThemeProvider theme={theme}>
   <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/single-product/id:' element={<SingleProduct/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
    <Footer/>
   </Router>
   </ThemeProvider>
  
  )
}

export default App