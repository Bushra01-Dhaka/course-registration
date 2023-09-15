import PropTypes from 'prop-types';


const Cart = ({cart}) => {
    const {title} = cart;
    return (
        <div>
            <li>{title}</li>
            
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object.isRequired
}

export default Cart;