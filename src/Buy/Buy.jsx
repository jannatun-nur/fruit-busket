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
             
             <div>
                {
                    buy.map(buys=><BuyCard key={buys._id} buys={buys}></BuyCard>)
                }
             </div>
        </div>
    );
};

export default Buy;