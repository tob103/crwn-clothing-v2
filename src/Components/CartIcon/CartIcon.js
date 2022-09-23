import './CartIcon.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {useContext} from "react";
import {CartContext} from "../../Contexts/CartContext";



const CartIcon = () => {

    const {isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);



    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'></ShoppingIcon>
            <span className='item-count'> {cartCount}  </span>
        </div>

    );
};

export default CartIcon;