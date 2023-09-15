import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import PropTypes from 'prop-types';

const Carts = ({selectBtn}) => {
    // const [carts, setCarts] = useState([]);

    // useEffect( () => {
    //     fetch('data.json')
    //     .then(res => res.json())
    //     .then(data => setCarts(data));
    // },[])
    return (
        <div className="bg-white p-4">
             <h2 className="text-xl font-bold text-[#2F80ED] pb-2 border-b-2 border-gray">Credit Hour Remaining 7 hr</h2>
             <h2 className="text-[#1C1B1B] font-bold text-xl my-2">Course Name</h2>
            <div className="my-4">
              {
                selectBtn.map(cart => <Cart cart={cart} key={cart.id} ></Cart> )
              }
            </div>
         
              <h3 className="text-stale-600 font-medium py-2 border-y-2 border-gray">Total Credit Hour : 13</h3>
             
              <h3 className="text-stale-600 font-medium py-2">Total Price : 48000 USD</h3>
                
        </div>
    );
};

Carts.propTypes =  {
    selectBtn: PropTypes.array
}

export default Carts;