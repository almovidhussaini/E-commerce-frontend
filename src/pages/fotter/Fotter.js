import React from 'react'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import './Foter.css'
const Fotter=()=> {
  return (
    <div className='footter'>
        <div className='foter1'>
            <h1>Multimart</h1>
            <p>Fugiat voluptate sit commodo et veniam mollit minim. Et mollit exercitation nulla ad proident proident pariatur ea ea aute amet. 
                Adipisicing id nisi cillum in esse sit ad. Aute quis sint ad consequat sint cupidatat mollit.
                  </p>
        </div>
        <div className='foter2'>
            <h1>Top Categories</h1>
            <h5>Mobile Phones</h5>
            <h5>Modern Sofa</h5>
            <h5>Arm Chair</h5>
            <h5>Smart Watches</h5>

        </div>
        <div className='foter3'>
            <h1>Useful Links</h1>
            <h5>Shop</h5>
            <h5>Cart</h5>
            <h5>Login</h5>
            <h5>Privacy Policy</h5>
            

         </div>
        <div className='foter4'>
            <div style={{display:"flex"}}><AddLocationIcon/> <p>Chitral Pakistan</p> </div>
            <div style={{display:"flex"}}><PhoneIcon/> <p>+923436727448</p>  </div>
            <div style={{display:"flex"}}><MailIcon/> <p>shahalmovid@gmailcom</p> </div>            
         </div>
      
    </div>
  )
}

export default Fotter