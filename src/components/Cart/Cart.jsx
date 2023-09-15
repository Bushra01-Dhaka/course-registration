import PropTypes from 'prop-types';


const Cart = ({cart}) => {
    const {title} = cart;
    return (
        <li>{title}</li>
      
    );
};

Cart.propTypes = {
    cart: PropTypes.object.isRequired
}

export default Cart;