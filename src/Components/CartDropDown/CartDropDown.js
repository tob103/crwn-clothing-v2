import './CartDropDown.scss'

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import {CartContext} from "../../Contexts/CartContext";
import {useContext} from "react";

const CartDropDown = () => {

    const {cartItems} = useContext(CartContext)

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item =>
                {
                  return <CartItem key={item.id} cartItem={item}/>
                })}

                <Button> GO TO CHECKOUT </Button>
            </div>
        </div>

    );

};

export default CartDropDown;