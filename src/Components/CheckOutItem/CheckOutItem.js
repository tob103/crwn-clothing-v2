import './CheckOutItem.scss'
import {useContext} from "react";
import {CartContext} from "../../Contexts/CartContext";

const CheckOutItem = ({cartItem}) => {

    const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    const {name, imageUrl, price, quantity} = cartItem;

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}> &#10094; </div>
                <div className='value'> {quantity} </div>
                <div className='arrow' onClick={addItemHandler}> &#10095; </div> </span>
            <span className='price'> {price} </span>

            <div onClick={clearItemHandler} className='remove-button'>&#10005;</div>
            {/*<div><span> {quantity * price} </span></div>*/}
        </div>
    );

}

export default CheckOutItem;

