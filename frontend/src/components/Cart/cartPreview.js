import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/cartActions';

function CartPreview(props) {

    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cart);

    const CartItem = (props) => {
        const data = props.data || {};

        const decrQty = (e) => {
            if (data.qty > 1) dispatch(addToCart(data.id, data.qty - 1));
        }

        const incrQty = (e) => {
            dispatch(addToCart(data.id, data.qty + 1));
        }

        const changeQty = (e) => {
            if(e.target.value >= 1) dispatch(addToCart(data.id, parseInt(e.target.value)));
        }

        const removeItem = (e) => {
            dispatch(removeFromCart(data.id));
        }

        return (
            <tr>
                <td className="align-middle"><img src={data.image.imgSrc} alt={data.image.altText} style={{ "width": "50px" }} />{data.title}</td>
                <td className="align-middle">{data.price}</td>
                <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{ "width": "100px" }}>
                        <div className="input-group-btn" onClick={decrQty}>
                            <button className="btn btn-sm btn-primary btn-minus" >
                                <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        <input type="text" className="form-control form-control-sm bg-secondary text-center" value={data.qty} onChange={changeQty}/>
                        <div className="input-group-btn" onClick={incrQty}>
                            <button className="btn btn-sm btn-primary btn-plus" >
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </td>
                <td className="align-middle">{data.totalPrice}</td>
                <td className="align-middle"><button className="btn btn-sm btn-primary" onClick={removeItem}><i className="fa fa-times"></i></button></td>
            </tr>
        );
    }

    return (
        <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-bordered text-center mb-0">
                <thead className="bg-secondary text-dark">
                    <tr>
                        <th>Product</th>
                        <th>Rate</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="align-middle">
                    {cartItems && cartItems !== null ?
                        cartItems.map((item, i) => {
                            return <CartItem key={i} data={item} />
                        }) : null}
                </tbody>
            </table>
        </div>


    );
}

export default CartPreview;