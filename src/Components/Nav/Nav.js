import React from 'react';
import { Link } from 'react-router-dom';
import {FiShoppingCart} from 'react-icons/fi'
import './style.css'



function Nav() {
  return (
    <React.Fragment>
       <nav>
            <ul className='nav_list'>
                <li >
                    <Link className='nav_item'>Home</Link>
                </li>
                <li >
                    <Link className='nav_item'>About</Link>
                </li>
                <li >
                    <Link className='nav_item'>Products</Link>
                </li>
                <li >
                    <Link className='nav_item'>Contact</Link>
                </li>
                <li>
                    <Link><FiShoppingCart className='cart'/></Link>
                </li>
            </ul>
        </nav>
    </React.Fragment>
  )
}

export default Nav