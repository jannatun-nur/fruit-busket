

const Card = ( {vitamins}) => {
    const {image, vitamin, name ,description} = vitamins;
    return (
        <div className="bg-rose-600 flex justify-around">
            <div className="">
                <img className="h-10 w-10 lg:h-32 lg:w-32 " src={image} alt="image" />
                <p>{name}</p>
                <p>{vitamin}</p>
            </div>
            <div className="w-1/2">
               <p className="w-full"> {description} </p>
            </div>
        </div>
    );
};

export default Card;