import React from 'react';
import { useSelector } from 'react-redux';
import CartPreview from './cartPreview';
import CartSummary from './cartSummary';

function Cart(props) {

    const { cartItems, cartSummary } = useSelector(state => state.cart);

    if (!cartItems) return null;

    if (cartItems.length === 0) return <div>Cart is Empty.....</div>;

    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <CartPreview />
                    <CartSummary />
                </div>
            </div>
        </>
    )
}

export default Cart;