import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const BuyCard = ({ buys }) => {
  const { image, name, price, rating, button } = buys;
  return (
    <div>
      <section className="h-64 w-56 bg-white border border-rose-600 rounded-lg">
        <img className="lg:h-32 lg:w-36 ml-5" src={image} alt="" />
        <h1 className="text-2xl font-bold text-center text-rose-600">{name}</h1>
        <p className="text-xl font-bold text-center text-rose-600">{price}</p>
        <p className="flex text-center text-amber-400 ml-16">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
        </p>
        <button className="px-2 py-1 rounded-lg text-white bg-rose-600 mt-2">
          {button}
        </button>
      </section>
    </div>
  );
};

export default BuyCard;
