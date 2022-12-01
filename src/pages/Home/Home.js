import React from 'react';
import hero from '../../assets/images/hero-img.png'
import './Home.css';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PaymentsIcon from '@mui/icons-material/Payments';
import BackupIcon from '@mui/icons-material/Backup';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Trendingproducts from './Trending/Trendingproducts'
import Bestsales from './bestsales/Bestsales';


const Home=()=> {
  return (
    <div className='home'>
      <div className='home-intro'>
        <div className='intro-left'>
            <p>Trending product in 2022</p>
            <h3>Make Your Interior more <br/> Minimalistic & Modern</h3>
            <p>lSit quis commodo Lorem reprehenderit esse non culpa est laboris minim esse pariatur adipisicing. 
                Elit qui laboris dolore fugiat quis dolore qui. Officia dolor pariatur incididunt Lorem laboris dolore.
            </p>
            <button>Shop now</button>
        </div>
        <div className='introl-righft'>
            <img src={hero} alt='img' className='introl-right' width={400} height={400}/>
        </div>
      </div>

      <div className='info'>
        <div className='info1'>
          <div>
            <LocalShippingIcon/>
          </div>
          <div>
            <h4>Free Shipping</h4>
            <p>Lorem Anim nulla duis ea irure labore.</p>
          </div>
        </div>
        <div className='info2'>
          <div> 
            <AutorenewIcon/>
          </div>
          <div>
            <h4>Easy Returns</h4>
            <p>Lorem Anim nulla duis ea irure labore.</p>
          </div>
         
        </div>
        <div className='info3'>
            
          
          <div><PaymentsIcon/></div>
          <div>
            <h4>Secure Payment</h4>
            <p>Lorem Anim nulla duis ea irure labore.</p>
          </div>
        </div>
        <div className='info4'>
          <div><BackupIcon/></div>
          <div>
            <h4>Back Gaurantee</h4>
            <p>Lorem Anim nulla duis ea irure labore.</p>
          </div>
        </div>
      </div>
      
      <div className='products'>
        <Trendingproducts/>
        
      </div>
      <Bestsales/>
    </div>
  )
}

export default Home
