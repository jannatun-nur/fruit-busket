
import slider1 from '../../public/assets/image/slider1.jpg'
import slider2 from '../../public/assets/image/slider2.jpg'
const Slider = () => {




    return (
   <>
   <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src={slider1} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
  </div> 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
   </>
    );
};

export default Slider;