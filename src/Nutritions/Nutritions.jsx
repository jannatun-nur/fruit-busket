const Nutritions = () => {
  return (
   <div>
     <div className="grid grid-cols-2 gap-2">
      <div className="bg-amber-400 flex justify-around lg:mt-6 rounded-lg shadow-xl">
        <div className="">
          <img
            className="h-10 w-10 lg:h-32 lg:w-32 lg:mt-20 "
            src="https://i.ibb.co/YBYH5LB/mango.png "
            alt="image"
          />
          <p className="lg:text-2xl font-bold text-gray-800">Mango</p>
          <p className="lg:text-2xl font-bold text-gray-800">vitamin A</p>
        </div>
        <div className="w-1/2">
          <p className="lg:text-xl text-gray-800">
            Mangos are high in vitamins, particularly vitamin C. A one-cup
            serving provides 66% of your daily value. You'll also benefit from a
            healthy dose of vitamin A (11%), vitamin B6 (11%), and smaller
            amounts of vitamin E, vitamin K, thiamin, riboflavin, folate,
            niacin, and pantothenic acid.One cup of raw mango pieces (165g)
            provides 99 calories, 91% of which come from carbs, 5% from protein,
            and 5% from fat, rounding up.
          </p>
        </div>
      </div>
      <div className="bg-purple-500 flex justify-around lg:mt-6 rounded-lg shadow-xl">
        <div className="">
          <img
            className="h-10 w-10 lg:h-32 lg:w-32 lg:mt-20 "
            src="https://i.ibb.co/9N33bwQ/grape.png "
            alt="image"
          />
          <p className="lg:text-2xl font-bold text-gray-800">Grape</p>
          <p className="lg:text-2xl font-bold text-gray-800">vitamin B</p>
        </div>
        <div className="w-1/2">
          <p className="lg:text-xl text-gray-800">
            Grapes are a sweet, low-fat, and low-calorie treat. If you are
            trying to reduce your intake of processed foods or added sugars,
            grapes can be a good substitute for snacks like cookies and candy.
            Most of the health benefits of grapes come from the vitamins they
            contain. Grapes are a nearly fat-free food, providing far less than
            1 gram per serving.
          </p>
        </div>
      </div>
      <div className="bg-rose-300 flex justify-around lg:mt-6 rounded-lg shadow-xl">
        <div className="">
          <img
            className="h-10 w-10 lg:h-32 lg:w-32 lg:mt-20 "
            src="https://i.ibb.co/GCVKdXs/straw.png"
            alt="image"
          />
          <p className="lg:text-2xl font-bold text-gray-800">Strawberry</p>
          <p className="lg:text-2xl font-bold text-gray-800">vitamin C</p>
        </div>
        <div className="w-1/2">
          <p className="lg:text-xl text-gray-800">
            Strawberries are very healthy, containing many antioxidants and
            vitamins. They are also low in calories, containing only about 32
            calories per half a cup.They’re an excellent source of vitamin C and
            manganese and also contain decent amounts of folate (vitamin B9) and
            potassium.Strawberries mainly consist of water (91%) and
            carbohydrates (7.7%). They contain only minor amounts of fat (0.3%)
            and protein (0.7%).
          </p>
        </div>
      </div>
      <div className="bg-yellow-300 flex justify-around lg:mt-6 rounded-lg shadow-xl">
        <div className="">
          <img
            className="h-10 w-10 lg:h-32 lg:w-32 lg:mt-20 "
            src="https://i.ibb.co/rcGTtJT/banana.png"
            alt="image"
          />
          <p className="lg:text-2xl font-bold text-gray-800">Banana</p>
          <p className="lg:text-2xl font-bold text-gray-800">vitamin D</p>
        </div>
        <div className="w-1/2">
          <p className="lg:text-xl text-gray-800">
            Bananas are among the most important food crops on the
            planet.Bananas are a healthy source of fiber, potassium, vitamin B6,
            vitamin C, and various antioxidants and phytonutrients.Bananas are
            mainly composed of carbs. Unripe bananas may contain decent amounts
            of resistant starch, which functions like fiber, aiding your gut and
            promoting healthy blood sugar levels.
          </p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Nutritions;
