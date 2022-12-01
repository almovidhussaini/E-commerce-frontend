import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import{ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './pages/Header/Header';
import './App.css'
import Home from './pages/Home/Home'
import Fotter from './pages/fotter/Fotter'
import Shope from './pages/shop/Shope';
import Cart from './pages/cart/Cart';
import Proccess from './pages/cart/Proccess'

function App() {
  console.log('working')
   return (
    <>
    <Router>
      <div className='container'>
        
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shope' element={<Shope/>}/>
          <Route path='cart' element={<Cart/>} />
          <Route path ='proccess' element={<Proccess/>} />
        </Routes>
        <Fotter/>
    </div>
    </Router>
    <ToastContainer/>
    
    
    </>
  );
}

export default App;
