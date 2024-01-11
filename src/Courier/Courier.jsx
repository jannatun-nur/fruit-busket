const Courier = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="flex justify-evenly">
        <section>
          <img
            className="absolute w-3/12 lg:h-40 lg:w-56 "
            src="https://i.ibb.co/XDnC6Tn/deli2.jpg"
            alt=""
          />
          <img
            className="relative top-32 left-32 lg:h-32 lg:w-52"
            src="https://i.ibb.co/7z4fDmp/del3.jpg"
            alt=""
          />
        </section>
        <section>
          <p className="text-rose-600 text-xl">Home Delivery</p>
          <p className="w-80 text-gray-800 lg:text-2xl">
            Fruit Basket is providing home delivery serice for beautiful
            customers. A customer will get their percel in 3 or 4 days.Where ever you live , you will get your order in time. It safe
            time and money. To confirm your courier service, cick{" "}
            <button className="text-rose-600 font-semibold">Book Courier</button>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Courier;
