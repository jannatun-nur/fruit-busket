
import './App.css'
import Navbar from './Navbar/Navbar'
import Nutrition from './Nutrition/Nutrition'
import Order from './Order/Order'
import Slider from './Slider/Slider'

function App() {


  return (
    <div className='min-h-screen bg-white'>
      <Navbar/>
      <Slider/>
      <Nutrition/>
      <Order/>
    </div>
  )
}

export default App
