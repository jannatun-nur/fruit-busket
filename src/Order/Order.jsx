import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Order = () => {
    return (
        <div>
            <p className="px-2 py-1 text-sm lg:px-4 lg:py-4 lg:text-2xl bg-rose-500 text-white mb-2 ">Buy Now</p>

            <div className="flex justify-around gap-2">
            <section className="h-64 w-56 bg-white border border-rose-600 rounded-lg">
               
                <img className="lg:h-32 lg:w-36 ml-5" src="https://i.ibb.co/98XgFPq/dragon.jpg" alt="" />
                <h1 className="text-2xl font-bold text-center text-rose-600">Dragon</h1>
                <p  className="text-xl font-bold text-center text-rose-600">Price: $50 - $70</p>
                <p className="flex text-center text-amber-400 ml-12"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></p>
                <button 
                className="px-2 py-1 rounded-lg text-white bg-rose-600 mt-2">details</button>
            </section>
            <section className="h-64 w-56 bg-white border border-rose-600 rounded-lg">
               
                <img className="lg:h-32 lg:w-36 ml-5" src="https://i.ibb.co/g3FfcZX/apple.jpg" alt="" />
                <h1 className="text-2xl font-bold text-center text-rose-600">Apple</h1>
                <p  className="text-xl font-bold text-center text-rose-600">Price: $30 - $50</p>
                <p className="flex text-center text-amber-400 ml-12"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></p>
                <button 
                className="px-2 py-1 rounded-lg text-white bg-rose-600 mt-2">details</button>
            </section>
            <section className="h-64 w-56 bg-white border border-rose-600 rounded-lg">
               
                <img className="lg:h-32 lg:w-36 ml-5" src="https://i.ibb.co/9VM1cr3/guava.jpg" alt="" />
                <h1 className="text-2xl font-bold text-center text-rose-600">Guava</h1>
                <p  className="text-xl font-bold text-center text-rose-600">Price: $20 - $30</p>
                <p className="flex text-center text-amber-400 ml-12"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></p>
                <button 
                className="px-2 py-1 rounded-lg text-white bg-rose-600 mt-2">details</button>
            </section>
            <section className="h-64 w-56 bg-white border border-rose-600 rounded-lg">
               
                <img className="lg:h-32 lg:w-36 ml-5" src="https://i.ibb.co/98XgFPq/dragon.jpg" alt="" />
                <h1 className="text-2xl font-bold text-center text-rose-600">Dragon</h1>
                <p  className="text-xl font-bold text-center text-rose-600">Price: $50 - $70</p>
                <p className="flex text-center text-amber-400 ml-12"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></p>
                <button 
                className="px-2 py-1 rounded-lg text-white bg-rose-600 mt-2">details</button>
            </section>
            
            <section className="h-64 w-56 bg-white border border-rose-600 rounded-lg">
               
                <img className="lg:h-32 lg:w-36 ml-5" src="https://i.ibb.co/hDzns3m/pro.jpg" alt="" />
                <h1 className="text-2xl font-bold text-center text-rose-600">pomegranate</h1>
                <p  className="text-xl font-bold text-center text-rose-600">Price: $60 - $90</p>
                <p className="flex text-center text-amber-400 ml-12"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></p>
                <button 
                className="px-2 py-1 rounded-lg text-white bg-rose-600 mt-2">details</button>
            </section>
            </div>
        </div>
    );
};

export default Order;