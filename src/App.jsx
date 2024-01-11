
import './App.css'
import Courier from './Courier/Courier'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Nutritions from './Nutritions/Nutritions'

import Order from './Order/Order'
import Rating from './Rating/Rating'
import Slider from './Slider/Slider'

function App() {


  return (
    <div className='min-h-screen bg-white'>
      <Navbar/>
      <Slider/>
     <Nutritions/>
      <Order/>
      <Courier/>
      <Rating/>
      <Footer/>
    </div>
  )
}

export default App
