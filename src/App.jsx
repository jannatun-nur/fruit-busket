
import './App.css'
import Buy from './Buy/Buy'
import Courier from './Courier/Courier'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Nutritions from './Nutritions/Nutritions'
import Rating from './Rating/Rating'
import Slider from './Slider/Slider'

function App() {


  return (
    <div className='min-h-screen bg-white rounded-2xl'>
      <Navbar/>
      <Slider/>
     <Nutritions/>
       <Buy/>
      <Courier/>
      <Rating/>
      <Footer/>
    </div>
  )
}

export default App
