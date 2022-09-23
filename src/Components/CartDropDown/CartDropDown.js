import './CartDropDown.scss'



import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import {CartContext} from "../../Contexts/CartContext";
import {useContext} from "react";
import {useNavigate} from "react-router";


const CartDropDown = () => {

    const {cartItems} = useContext(CartContext)
    const navigate=useNavigate();

    const goToCheckOutHandler = () => {
        navigate('checkout')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item =>
                {
                  return <CartItem key={item.id} cartItem={item}/>
                })}

                <Button onClick={goToCheckOutHandler}> GO TO CHECKOUT </Button>
            </div>
        </div>

    );

};

export default CartDropDown;