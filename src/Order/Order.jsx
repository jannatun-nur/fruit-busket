import { FaStar } from "react-icons/fa";

const Order = () => {
    return (
        <div>
            <section className="h-72 w-72 bg-rose-100">
               
                <img className="lg:h-32 lg:w-32 ml-16 " src="https://i.ibb.co/98XgFPq/dragon.jpg" alt="" />
                <h1 className="text-2xl font-bold text-center text-rose-600">Dragon</h1>
                <p  className="text-xl font-bold text-center text-rose-600">Price: $50 - $70</p>
                <p className="flex text-center text-orange-400"><FaStar /><FaStar /><FaStar /><FaStar /></p>
                <button>details</button>
            </section>
        </div>
    );
};

export default Order;