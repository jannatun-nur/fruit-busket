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
            <div>
                {
                    vitamin.map( vitamins =><Card key={vitamins._id} vitamins={vitamins}></Card>)
                }
            </div>
        </div>
    );
};

export default Nutrition;






