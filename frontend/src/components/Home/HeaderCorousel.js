import React from 'react';
import { useSelector } from 'react-redux';

function HeaderCorousel(props) {
    
    const {loading, data, error} = useSelector((state) => state.homeData);

    if(!data) return null;

    const changeSlide = (e) => {
        const currActiveSlide = document.querySelector("#header-carousel .carousel-item.active");
        
        let newActiveSlide = null;
        if (e.currentTarget.dataset.slide === "prev") 
            newActiveSlide = currActiveSlide.previousElementSibling ||
                            document.querySelector("#header-carousel .carousel-item:last-of-type");
        else 
            newActiveSlide = currActiveSlide.nextElementSibling ||
                            document.querySelector("#header-carousel .carousel-item:first-of-type");

        if(newActiveSlide && newActiveSlide !== null) {
            newActiveSlide.classList.add("active");
            currActiveSlide.classList.remove("active");
        }
    }

    const _list = data.headerCorousel;

    if(_list.length === 0) return null;

    return (
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {_list.map((item, i) => {
                    return (
                        <div key={i} className={"carousel-item" + (i==0 ? " active" : "")} style={{ "height": "410px" }}>
                            <img className="img-fluid" src={item.imgSrc} alt={item.altText} />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ "maxWidth": "700px" }}>
                                    <h4 className="text-light text-uppercase font-weight-medium mb-3">{item.offerText}</h4>
                                    <h3 className="display-4 text-white font-weight-semi-bold mb-4">{item.headingText}</h3>
                                    <a href={item.refLink} className="btn btn-light py-2 px-3">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <a className="carousel-control-prev" onClick={changeSlide} data-slide="prev">
                <div className="btn btn-dark" style={{ "width": "45px", "height": "45px" }}>
                    <span className="carousel-control-prev-icon mb-n2"></span>
                </div>
            </a>
            <a className="carousel-control-next" onClick={changeSlide} data-slide="next">
                <div className="btn btn-dark" style={{ "width": "45px", "height": "45px" }}>
                    <span className="carousel-control-next-icon mb-n2"></span>
                </div>
            </a>
        </div>
    );
}

export default HeaderCorousel;