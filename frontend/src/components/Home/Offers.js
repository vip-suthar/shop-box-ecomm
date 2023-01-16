import React from 'react';
import { useSelector } from 'react-redux';

function Offers(props) {

    const _list = useSelector((state) => state.homeData.data.offersList);

    if(_list.length === 0) return null;

    const OfferTemp = (props) => {
        const data = props.data || {};
        return (
            <div className="col-md-6 pb-4">
                <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                    <img src={data.imgSrc} alt={data.altText} />
                    <div className="position-relative" style={{ "zIndex": "1" }}>
                        <h5 className="text-uppercase text-primary mb-3">{data.descText}</h5>
                        <h1 className="mb-4 font-weight-semi-bold">{data.offTitle}</h1>
                        <a href={data.refLink} className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid offer pt-5">
            <div className="row px-xl-5">
                {_list.map((offer, i)=>{
                    return <OfferTemp key={i} data={offer} />
                })}
            </div>
        </div>
    )
}

export default Offers;