

const Card = ( {vitamins}) => {
    const {image, vitamin, name ,description} = vitamins;
    return (
        <div className="bg-rose-200 flex justify-around lg:mt-6 rounded-lg shadow-xl">
            <div className="">
                <img className="h-10 w-10 lg:h-32 lg:w-32 lg:mt-20 " src={image} alt="image" />
                <p className="lg:text-2xl font-bold text-gray-800">{name}</p>
                <p className="lg:text-2xl font-bold text-gray-800">{vitamin}</p>
            </div>
            <div className="w-1/2">
               <p className="lg:text-xl text-gray-800"> {description} </p>
            </div>
        </div>
    );
};

export default Card;