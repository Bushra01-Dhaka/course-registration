import Cart from "../Cart/Cart";
import PropTypes from 'prop-types';

const Carts = ({selectBtn, totalRemaining, totalCredit, totalPrice}) => {
   
    return (
        <div className="bg-white p-4">
             <h2 className="text-xl font-bold text-[#2F80ED] pb-2 border-b-2 border-gray">Credit Hour Remaining {totalRemaining} hr</h2>
             <h2 className="text-[#1C1B1B] font-bold text-xl my-2">Course Name</h2>
            <div className="my-4 list-decimal">
              {
                selectBtn.map(cart => <Cart cart={cart} key={cart.id} ></Cart> )
              }
            </div>
         
              <h3 className="text-stale-600 font-medium py-4 border-y-2 border-gray">Total Credit Hour : {totalCredit}</h3>
             
              <h3 className="text-stale-600 font-medium py-4">Total Price : {totalPrice} USD</h3>
                
        </div>
    );
};

Carts.propTypes =  {
    selectBtn: PropTypes.array,
    totalRemaining: PropTypes.number,
    totalCredit: PropTypes.number,
    totalPrice: PropTypes.number


}

export default Carts;