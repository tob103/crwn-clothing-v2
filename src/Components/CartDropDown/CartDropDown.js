import './CartDropDown.scss'

import Button from "../Button/Button";

const CartDropDown = () => {

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
             <Button> GO TO CHECKOUT </Button>
            </div>
        </div>

    );

};

export default CartDropDown;