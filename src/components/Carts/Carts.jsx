import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Carts = () => {
    const [carts, setCarts] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCarts(data));
    },[])
    return (
        <div>
             <h2 className="text-xl font-bold">Credit Hour Remaining 7 hr</h2>
            
            {
                carts.map(cart => <Cart cart={cart}></Cart> )
            }
        </div>
    );
};

export default Carts;