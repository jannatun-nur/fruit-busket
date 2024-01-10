
import slider1 from '../../public/assets/image/slider1.jpg'
import slider2 from '../../public/assets/image/slider2.jpg'
const Slider = () => {




    return (
   <>
   <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full h-[200px] lg:h-[450px]">
    <img src="https://img.freepik.com/free-photo/colorful-fruit-basket-showcases-healthy-fresh-variety-generated-by-ai_188544-13415.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item h-[200px] lg:h-[450px] w-full">
    <img src="https://img.freepik.com/free-photo/fresh-fruits-arrangement_23-2148949747.jpg" className="w-full" />
  </div> 
</div> 
<div className="flex justify-center w-full gap-2">
  <a href="#item1" className=" btn-xs bg-rose-500 text-white rounded-lg">01</a> 
  <a href="#item2" className="btn-xs bg-rose-500 text-white rounded-lg">02</a> 

</div>
   </>
    );
};

export default Slider;