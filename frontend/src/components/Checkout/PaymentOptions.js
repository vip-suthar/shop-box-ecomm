import React from 'react';

function PaymentOptions(props) {
    const paymentMethods = props.paymentMethods || [];
    const isDisabled = paymentMethods.length > 0 ? false : true;
    return (
        <div className="card border-secondary mb-5">
            <div className="card-header bg-secondary border-0">
                <h4 className="font-weight-semi-bold m-0">Payment</h4>
            </div>
            <div className="card-body">
                {paymentMethods.map((item, i) => {
                    return (
                        <div className="form-group" key={i}>
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="payment" id={item.id} />
                                <label className="custom-control-label" htmlFor={item.id}>{item.title}</label>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="card-footer border-secondary bg-transparent">
                <button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3" disabled={isDisabled}>Place Order</button>
            </div>
        </div>
    );
}

export default PaymentOptions;