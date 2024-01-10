import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";


const Nutrition = () => {

    const [ vitamin, setVitamin] = useState([]);

    useEffect( ()=>{
        fetch('nutrition.json')
        .then(res=> res.json())
        .then(data => setVitamin(data))
    },[])
    
    return (
        <div>
           <div className="mx-auto w-2/9 lg:w-3/12 mt-3 lg:mt-4">
           <p className="px-2 py-1 text-sm lg:px-4 lg:py-4 lg:text-2xl bg-rose-500 text-white ">Basic Nutrition Information</p>
           </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {
                    vitamin.map( vitamins =><Card key={vitamins._id} vitamins={vitamins}></Card>)
                }
            </div>
        </div>
    );
};

export default Nutrition;






