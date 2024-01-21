const Courier = () => {
  return (
    <div className=" bg-whitept-20 mt-4">
      <div className="lg:flex lg:justify-evenly flex justify-between">
        <section className="mt-8 lg:mt-0">
          <img
            className="absolute w-20 h-16 lg:h-40 lg:w-56 bg-ro"
            src="https://i.ibb.co/XDnC6Tn/deli2.jpg"
            alt=""
          />
          <img
            className="relative top-10 left-10 lg:top-32 lg:left-32 h-14 w-20 lg:h-32 lg:w-52"
            src="https://i.ibb.co/7z4fDmp/del3.jpg"
            alt=""
          />
        </section>
        <section>
          <p className="text-rose-600 text-sm lg:text-xl">Home Delivery</p>
          <p className="w-48 lg:w-80 text-gray-800 text-sm lg:text-2xl">
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
