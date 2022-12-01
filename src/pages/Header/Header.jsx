import React from 'react'
import {Link} from 'react-router-dom'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector, useDispatch } from 'react-redux';
import './Header.css'
import {CgProfile} from 'react-icons/cg'
import AccountBoxIcon from '@mui/icons-material/AccountBox';




const Header=()=> {
  const {
    cart
  }= useSelector((store) => store.Products);

  

  // console.log(cart,'cart inside header')
  // console.log(cart.index())
  console.log('header.jsx')

  return (
    <div className='header'>
        <div className='title'>
            <CardGiftcardIcon/>
            <h3>Eccomerce</h3>

        </div>

        <div className='middle-containt'>
            <Link to='/' className='link'>Home</Link>
            <Link to='shope' className='link'>Shop</Link>
            <Link to='cart' className='link'>Cart</Link>
        </div>

        <div className='user-icons'>
             <Badge color="primary" badgeContent={Object.keys(cart).length}>
             <ShoppingCartIcon />{" "}
             </Badge>
             <AccountBoxIcon/>

        </div>
    </div>
  )
}

export default Header
