import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cartActions';

function ProductDetails(props) {

    const { loading, data, error } = useSelector((state) => state.productDetails);
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    if (!data || data === null) return null;

    const ProductCorousel = (props) => {

        const _list = props.imgList || [];
    
        if (_list.length === 0) return null;
    
        return (
            <div id="product-carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner border">
                    {_list.map((item, i) => {
                        return (
                            <div key={i} className={"carousel-item" + (i == 0 ? " active" : "")}>
                                <img className="w-100 h-100" src={item.imgSrc} alt={item.altText} />
                            </div>
                        );
                    })}
                </div>
                <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                    <i className="fa fa-2x fa-angle-left text-dark"></i>
                </a>
                <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                    <i className="fa fa-2x fa-angle-right text-dark"></i>
                </a>
            </div>
        );
    }

    const _sizeList = data.sizes;
    const _colorList = data.colors;

    const decrQty = (e) => {
        if (qty > 1) setQty(state => state - 1);
    }

    const incrQty = (e) => {
        setQty(state => state + 1);
    }

    const changeQty = (e) => {
        if(e.target.value >= 1) setQty(parseInt(e.target.value));
    }

    return (
        <div className="container-fluid py-5">
            <div className="row px-xl-5">
                <div className="col-lg-5 pb-5">
                    <ProductCorousel
                        imgList={data.images}
                    />
                </div>

                <div className="col-lg-7 pb-5">
                    <h3 className="font-weight-semi-bold">{data.title}</h3>
                    <div className="d-flex mb-3">
                        <div className="text-primary mr-2">
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star-half-alt"></small>
                            <small className="far fa-star"></small>
                        </div>
                        <small className="pt-1">({data.ratingCount} Ratings)</small>
                    </div>
                    <h3 className="font-weight-semi-bold mb-4">{data.origPrice}</h3>
                    <p className="mb-4">{data.shortDesc}</p>
                    <div className="d-flex mb-3">
                        <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
                        <form>
                            {_sizeList.map((item, i) => {
                                return (
                                    <div key={i} className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id={"size-" + item} name="size" />
                                        <label className="custom-control-label" htmlFor={"size-" + item}>{item}</label>
                                    </div>
                                )
                            })}
                        </form>
                    </div>
                    <div className="d-flex mb-4">
                        <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
                        <form>
                            {_colorList.map((item, i) => {
                                return (
                                    <div key={i} className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" className="custom-control-input" id={"color-" + item} name="color" />
                                        <label className="custom-control-label" htmlFor={"color-" + item}>{item}</label>
                                    </div>
                                )
                            })}
                        </form>
                    </div>
                    <div className="d-flex align-items-center mb-4 pt-2">
                        <div className="input-group quantity mr-3" style={{ "width": "130px" }}>
                            <div className="input-group-btn" onClick={decrQty}>
                                <button className="btn btn-primary btn-minus" >
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                            <input type="text" className="form-control bg-secondary text-center" value={qty} onChange={changeQty}/>
                            <div className="input-group-btn" onClick={incrQty}>
                                <button className="btn btn-primary btn-plus">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button className="btn btn-primary px-3" onClick={(e)=> {dispatch(addToCart(data.id, qty))}}><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
                    </div>
                    <div className="d-flex pt-2">
                        <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                        <div className="d-inline-flex">
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="text-dark px-2" href="">
                                <i className="fab fa-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row px-xl-5">
                <div className="col">
                    <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                        <a className="nav-item nav-link active" data-toggle="tab" href="#tab-pane-1">Description</a>
                        <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">Information</a>
                        <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">Reviews ({data.reviewCount})</a>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tab-pane-1">
                            <h4 className="mb-3">Product Description</h4>
                            {data.description.map((item, i) => {
                                return <p key={i}>{item}</p>;
                            })}
                        </div>
                        <div className="tab-pane fade" id="tab-pane-2">
                            <h4 className="mb-3">Additional Information</h4>
                            <p>{data.information?.desc}</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item px-0">
                                            Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                        </li>
                                        <li className="list-group-item px-0">
                                            Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mb-4">1 review for "Colorful Stylish Shirt"</h4>
                                    <div className="media mb-4">
                                        <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ "width": "45px" }} />
                                        <div className="media-body">
                                            <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                            <div className="text-primary mb-2">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="mb-4">Leave a review</h4>
                                    <small>Your email address will not be published. Required fields are marked *</small>
                                    <div className="d-flex my-3">
                                        <p className="mb-0 mr-2">Your Rating * :</p>
                                        <div className="text-primary">
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="message">Your Review *</label>
                                            <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Your Name *</label>
                                            <input type="text" className="form-control" id="name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Your Email *</label>
                                            <input type="email" className="form-control" id="email" />
                                        </div>
                                        <div className="form-group mb-0">
                                            <input type="submit" value="Leave Your Review" className="btn btn-primary px-3" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;