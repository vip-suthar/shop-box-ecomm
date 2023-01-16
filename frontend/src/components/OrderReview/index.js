import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function OrderReviewScreen(props) {

    const { loading, userInfo, error } = useSelector((state) => state.userSignin);

    const navigate = useNavigate();

    useEffect(() => {
        if ((!userInfo) || userInfo === null) navigate("/signin?redirect=/order-review");
    }, []);

    const { cartItems, cartSummary, shipping } = useSelector(state => state.cart);

    if (!cartItems || cartItems === null || cartItems.length === 0) return null;
    if (!cartSummary || cartSummary === null) return null;
    if (!shipping || shipping === null) return null;

    return (
        <div className="card border-secondary mb-5">
            <div className="card-header bg-secondary border-0">
                <h4 className="font-weight-semi-bold m-0 text-center">Order Total</h4>
            </div>
            <div className="card-body">
                <h5 className="font-weight-medium mb-3">Products</h5>
                {cartItems.map((item) => {
                    return (
                        <div className="d-flex justify-content-between">
                            <p>{item.title}</p>
                            <p>{item.price} X {item.qty} = {item.totalPrice}</p>
                        </div>
                    )
                })}

                <div className="d-flex justify-content-between mb-2 pt-1">
                    <h6 className="font-weight-medium">Subtotal</h6>
                    <h6 className="font-weight-medium">{cartSummary.subTotal}</h6>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <h6 className="font-weight-medium">Shipping</h6>
                    <h6 className="font-weight-medium">{cartSummary.shipping}</h6>
                </div>
                <div className="d-flex justify-content-between">
                    <h6 className="font-weight-medium">Discount</h6>
                    <h6 className="font-weight-medium">{cartSummary.discount}</h6>
                </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
                <div className="d-flex justify-content-between mt-2">
                    <h5 className="font-weight-bold">Total</h5>
                    <h5 className="font-weight-bold">{cartSummary.total}</h5>
                </div>
            </div>

            <div className="card-header bg-secondary border-0 mt-2">
                <h4 className="font-weight-semi-bold m-0 text-center">Shipping Address</h4>
            </div>
            <div className="card-body">
                <div className="text-dark">
                    <span className="font-weight-bold">First Name: </span>{shipping.firstName}
                    <span className="ms-2 font-weight-bold">Last Name: </span>{shipping.lastName}
                </div>
                <div className="text-dark">
                    <span className="font-weight-bold">Email: </span>{shipping.email}
                    <span className="ms-2 font-weight-bold">Mobile No.: {shipping.mobile}</span>
                </div>
                <div className="text-dark">
                    <span className="font-weight-bold">Address: </span>{shipping.address.line1}{shipping.address.line2.trim() !== "" ? "(" + shipping.address.line2 + ")" : ""}, {shipping.address.city}, {shipping.address.state}, {shipping.address.country} - {shipping.address.zipCode}
                </div>
            </div>
            <hr className="mt-2" />
            <button className="btn btn-block btn-primary my-3 py-3">Proceed To Payment</button>

        </div>
    );
}

export default OrderReviewScreen;