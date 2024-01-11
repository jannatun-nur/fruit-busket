import { useEffect } from "react";
import { useState } from "react";
import BuyCard from "./BuyCard";


const Buy = () => {

    const [buy , setBuy] = useState([]);

    useEffect( ()=>{
        fetch('buy.json')
        .then(res =>res.json())
        .then(data =>setBuy(data));
    },[])
    return (
        <div>

            <p className="lg:px-5 lg:py-2 rounded-lg bg-rose-500 text-white lg:mx-auto mx-10 lg:text-2xl w-9/12 lg:w-3/12 my-2 lg:my-10">Buy your favorite</p> 
             <div className="grid grid-cols-2 lg:grid-cols-5">
                {
                    buy.map(buys=><BuyCard key={buys._id} buys={buys}></BuyCard>)
                }
             </div>
        </div>
    );
};

export default Buy;