import './CheckOutPage.scss'
import {CartContext} from "../../../Contexts/CartContext";
import {useContext} from "react";
import CheckOutItem from "../../CheckOutItem/CheckOutItem";

const CheckOutPage = () => {

    const {cartItems, addItemToCart, removeItemFromCart, clearItemFromCar, cartTotal} = useContext(CartContext)

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span> Product </span>
                </div>
                <div className='header-block'>

                    <span> Description </span>
                </div>
                <div className='header-block'>
                    <span> Quantity</span>

                </div>
                <div className='header-block'>
                    <span>Price </span>

                </div>
                <div className='header-block'>

                    <span> Remove </span>

                </div>
            </div>
            {/*<p> I am the check out page! </p>*/}

            {
                cartItems.map((cartItem) => {
                    const {id, name, price, quantity} = cartItem;

                    return (
                        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                    )

                        {/*<h2> {name} </h2>*/}
                        {/*<span> {quantity} </span>*/}
                        {/*<span onClick={() => removeItemFromCart(cartItem)}> decrement </span>*/}
                        {/*<span onClick={() => addItemToCart(cartItem)}> increment </span>*/}

                })
            }

            <span className='total'> Total: ${cartTotal} </span>

        </div>

    );

}

export default CheckOutPage;

