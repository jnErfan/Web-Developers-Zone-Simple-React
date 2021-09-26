import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developers from '../Developers/Developers';
import "./Main.css"

const Main = () => {

    const [developers, setDevelopers] = useState([]);
    const [cartUpdate , setCartUpdate] = useState([]);
    const [cart , setCart] = useState([]);

    useEffect(()=>{
        fetch("/data.JSON")
        .then(res => res.json())
        .then(data => setDevelopers(data))
    },[])


    const getHired = developer => {
        const hiredCounts = [...cartUpdate,developer];
        setCartUpdate(hiredCounts);
    }


    return (
 <div>
     
    <div className="row row-cols-1 row-cols-md-3 row-lg-4 g-4 d-flex justify-content-center">

        <div className="col col-9 col-md-9 col-lg-9">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">

        {
            developers.map(developer => <Developers
                key={developer.id}
                developer = {developer}
                getHired={getHired}
            />)
     }
            
        </div>
        </div>

        <div className="col col-10 col-md-3 col-lg-3">
                 
                     <Cart 
                    cartUpdate={cartUpdate}
                     />
        </div>

    </div>
 </div>       
    );
};

export default Main;