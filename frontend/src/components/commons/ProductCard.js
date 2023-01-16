import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cartActions';

function ProductCard(props) {

    const prodData = props.prodData;
    const dispatch = useDispatch();

    return (
        <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img className="img-fluid w-100" src={prodData.images[0]?.imgSrc} alt={prodData.images[0]?.altText} />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">{prodData.title}</h6>
                <div className="d-flex justify-content-center">
                    <h6>{prodData.origPrice}</h6><h6 className="text-muted ml-2"><del>{prodData.delPrice}</del></h6>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
                <a href={"/product/" + prodData.id} className="btn btn-sm text-dark p-0"><i className="fa fa-eye text-primary mr-1"></i>View Detail</a>
                <a className="btn btn-sm text-dark p-0" onClick={() => { dispatch(addToCart(prodData.id, 1)) }}><i className="fa fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
            </div>
        </div>
    );
}

export default ProductCard;