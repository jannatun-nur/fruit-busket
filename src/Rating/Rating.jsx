import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Rating = () => {
  return (
    <div>
        <p className="py-6 font-bold text-gray-800 text-2xl">What's our cutomers says</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <section className="lg:h-64 h-40 lg:w-56 w-36 bg-white shadow shadow-slate-400 rounded-lg">
          <img
            className="h-8 w-8 lg:h-20 lg:w-20 ml-14 lg:ml-16 rounded-full"
            src="https://i.ibb.co/TkgGYVK/rodsi.jpg"
            alt=""
          />
          <h1 className="text-sm  lg:text-2xl font-bold text-center text-rose-600">
            Rodsi
          </h1>
          <p className=" text-sm lg:text-xl font-bold text-center text-gray-800">
            "Good service!!Glad to see they use sustainable packaging."
          </p>
          <p className="flex text-sm lg:text-xl text-center text-amber-400 ml-7 lg:ml-14 pt-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStarHalfStroke />
          </p>
          
        </section>
        <section className="lg:h-64 h-40 lg:w-56 w-36 bg-white shadow shadow-slate-400 rounded-lg">
          <img
            className="h-8 w-8 lg:h-20 lg:w-20 ml-14 lg:ml-16 rounded-full"
            src="https://i.ibb.co/343DDx4/sahi.jpg"
            alt=""
          />
          <h1 className="text-sm lg:text-2xl font-bold text-center text-rose-600">
            Sahil A.J
          </h1>
          <p className=" text-sm lg:text-xl font-bold text-center text-gray-800">
            "Great experience overall! Will definitely order again.They are quite active."
          </p>
          <p className="flex text-sm lg:text-xl text-center text-amber-400 ml-7 lg:ml-14 pt-2">
            <FaStar />
            <FaStar />
            <FaStar />
            
            <FaRegStarHalfStroke />
          </p>
          
        </section>
        <section className="lg:h-64 h-40 lg:w-56 w-36 bg-white shadow shadow-slate-400 rounded-lg">
          <img
            className="h-8 w-8 lg:h-20 lg:w-20 ml-14 lg:ml-16 rounded-full"
            src="https://i.ibb.co/JptG2D0/mahiee.jpg"
            alt=""
          />
          <h1 className="text-sm lg:text-2xl font-bold text-center text-rose-600">
           Mahiee
          </h1>
          <p className=" text-sm lg:text-xl font-bold text-center text-gray-800">
            "Well done!!Delivery person was very friendly and decent."
          </p>
          <p className="flex text-sm lg:text-xl text-center text-amber-400 ml-7 lg:ml-14 pt-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            
          </p>
          
        </section>
        <section className="lg:h-64 h-40 lg:w-56 w-36 bg-white shadow shadow-slate-400 rounded-lg">
          <img
            className="h-8 w-8 lg:h-20 lg:w-20 ml-14 lg:ml-16 rounded-full"
            src="https://i.ibb.co/xH54LnP/steny.jpg"
            alt=""
          />
          <h1 className="text-sm lg:text-2xl font-bold text-center text-rose-600">
            Steny
          </h1>
          <p className=" text-sm lg:text-xl font-bold text-center text-gray-800">
            "Their fruits are very fresh and good.I will give it 8/10."
          </p>
          <p className="flex text-sm lg:text-xl text-center text-amber-400 ml-7 lg:ml-14 pt-2">
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
