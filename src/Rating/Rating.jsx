import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Rating = () => {
  return (
    <div>
      <div className="">
        <section className="h-64 w-56 bg-white shadow-lg rounded-lg">
          <img
            className="lg:h-20 lg:w-20 ml-16 rounded-full"
            src="https://i.ibb.co/TkgGYVK/rodsi.jpg"
            alt=""
          />
          <h1 className="text-2xl font-bold text-center text-rose-600">
            Rodsi
          </h1>
          <p className="text-xl font-bold text-center text-gray-800">
            "Good service!!Glad to see they use sustainable packaging."
          </p>
          <p className="flex text-center text-amber-400 ml-14 pt-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStarHalfStroke />
          </p>
          
        </section>
        <section className="h-64 w-56 bg-white shadow-lg rounded-lg">
          <img
            className="lg:h-20 lg:w-20 ml-16 rounded-full"
            src="https://i.ibb.co/343DDx4/sahi.jpg"
            alt=""
          />
          <h1 className="text-2xl font-bold text-center text-rose-600">
            Sahil A.J
          </h1>
          <p className="text-xl font-bold text-center text-gray-800">
            "Great experience overall! Will definitely order again.They are quite active."
          </p>
          <p className="flex text-center text-amber-400 ml-14 pt-2">
            <FaStar />
            <FaStar />
            <FaStar />
            
            <FaRegStarHalfStroke />
          </p>
          
        </section>
        <section className="h-64 w-56 bg-whiteshadow-lg rounded-lg">
          <img
            className="lg:h-20 lg:w-20 ml-16 rounded-full"
            src="https://i.ibb.co/JptG2D0/mahiee.jpg"
            alt=""
          />
          <h1 className="text-2xl font-bold text-center text-rose-600">
           Mahiee
          </h1>
          <p className="text-xl font-bold text-center text-gray-800">
            "Well done!!Delivery person was very friendly and decent."
          </p>
          <p className="flex text-center text-amber-400 ml-14 pt-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            
          </p>
          
        </section>
        <section className="h-64 w-56 bg-white shadow-lg rounded-lg">
          <img
            className="lg:h-20 lg:w-20 ml-16 rounded-full"
            src="https://i.ibb.co/xH54LnP/steny.jpg"
            alt=""
          />
          <h1 className="text-2xl font-bold text-center text-rose-600">
            Steny
          </h1>
          <p className="text-xl font-bold text-center text-gray-800">
            "Their fruits are very fresh and good.I will give it 8/10."
          </p>
          <p className="flex text-center text-amber-400 ml-14 pt-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStarHalfStroke />
          </p>
          
        </section>
      </div>
    </div>
  );
};

export default Rating;
