import PropTypes from 'prop-types';


const Cart = ({cart}) => {
    const {title} = cart;
    return (
        <li className='text-gray-500'>{title}</li>
      
    );
};

Cart.propTypes = {
    cart: PropTypes.object.isRequired
}

export default Cart;