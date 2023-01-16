import React from 'react';
import { useSelector } from 'react-redux';

function Categories(props) {

    const _list = useSelector((state) => state.homeData.data.categoriesList);

    if(_list.length === 0) return null;

    const CategoryTemp = (props) => {

        const data = props.data || {};
        
        return (
            <div className="col-lg-4 col-md-6 pb-1">
                <div className="cat-item d-flex flex-column border mb-4" style={{ "padding": "30px" }}>
                    <p className="text-right">{data.count} Product(s)</p>
                    <a href={data.refLink} className="cat-img position-relative overflow-hidden mb-3">
                        <img className="img-fluid" src={data.imgSrc} alt={data.altText} />
                    </a>
                    <h5 className="font-weight-semi-bold m-0">{data.catTitle}</h5>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">
                {_list.map((item, i)=>{
                    return (
                        <CategoryTemp key={i} data={item} />
                    );
                })}
            </div>
        </div>
    );
}

export default Categories;