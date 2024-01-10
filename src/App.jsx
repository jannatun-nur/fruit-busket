
import './App.css'
import Navbar from './Navbar/Navbar'
import Nutrition from './Nutrition/Nutrition'
import Slider from './Slider/Slider'

function App() {


  return (
    <div className='min-h-screen bg-white'>
      <Navbar/>
      <Slider/>
      <Nutrition/>
    </div>
  )
}

export default App
