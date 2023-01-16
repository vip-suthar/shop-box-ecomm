import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartSummary(props) {

    const { cartSummary } = useSelector(state => state.cart);

    return (
        <div className="col-lg-4">
            <form className="mb-5" action="">
                <div className="input-group">
                    <input type="text" className="form-control p-4" placeholder="Coupon Code" />
                    <div className="input-group-append">
                        <button className="btn btn-primary">Apply Coupon</button>
                    </div>
                </div>
            </form>
            <div className="card border-secondary mb-5">
                <div className="card-header bg-secondary border-0">
                    <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between mb-2 pt-1">
                        <h6 className="font-weight-medium">Subtotal</h6>
                        <h6 className="font-weight-medium">+ {cartSummary.subTotal}</h6>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <h6 className="font-weight-medium">Shipping</h6>
                        <h6 className="font-weight-medium">+ {cartSummary.shipping}</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h6 className="font-weight-medium">Discount</h6>
                        <h6 className="font-weight-medium">- {cartSummary.discount}</h6>
                    </div>
                </div>
                <div className="card-footer border-secondary bg-transparent">
                    <div className="d-flex justify-content-between mt-2">
                        <h5 className="font-weight-bold">Total</h5>
                        <h5 className="font-weight-bold">{cartSummary.total}</h5>
                    </div>
                    <Link to="/shipping" className="btn btn-block btn-primary my-3 py-3">Proceed To Checkout</Link>
                </div>
            </div>
        </div>
    );
}

export default CartSummary;