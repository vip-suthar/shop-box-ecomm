import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../commons/ProductCard';

function ProductsList(props) {

    const title = props.title;
    const prodListName = props.listName;

    const _list = useSelector((state) => state.homeData.data[prodListName]);

    if (_list.length === 0) return null;

    return (
        <div className="container-fluid pt-5">
            <div className="text-center mb-4">
                <h2 className="section-title px-5"><span className="px-2">{title}</span></h2>
            </div>
            <div className="row px-xl-5 pb-3">
                {_list.map((item, i) => {
                    return (
                        <div key={i} className="col-lg-3 col-md-6 col-sm-12 pb-1">
                            <ProductCard prodData={item} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ProductsList;