import React from 'react';
import { useSelector } from 'react-redux';


function Features(props) {

    const _list = useSelector((state) => state.homeData.data.featuresList);

    if(_list.length === 0) return null;

    const FeatureTemp = (feature) => {
        return (
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center border mb-4" style={{ "padding": "30px" }}>
                    <h1 className={feature.data.icon + " text-primary m-0 mr-3"}></h1>
                    <h5 className="font-weight-semi-bold m-0">{feature.data.title}</h5>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid pt-5">
            <div className="row px-xl-5 pb-3">
                {_list.map((feature, i) => {
                    return <FeatureTemp key={i} data={feature} />
                })}
            </div>
        </div>
    );
}

export default Features;