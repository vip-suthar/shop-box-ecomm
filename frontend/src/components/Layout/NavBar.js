import React from 'react';

function NavBar() {

    const toggleNav = function (e) {
        e.currentTarget.classList.toggle("collapsed");
        document.getElementById("navbar-vertical").classList.toggle("show");
    }

    const toggleDropdown = function (e) {
        e.currentTarget.parentElement.classList.toggle("show");
        document.getElementById("dropdown-vertical").classList.toggle("show");
    }

    const clickDropdownToggle = function (e) {
        e.currentTarget.classList.toggle("show");
        e.currentTarget.querySelector(".nav-link").classList.toggle("active");
        e.currentTarget.querySelector(".dropdown-menu").classList.toggle("show");
    }

    const toggleNavbarCollapse = function (e) {
        e.currentTarget.classList.toggle("collapsed");
        document.getElementById("navbarCollapse").classList.toggle("show");
    }

    return (
        <div className="container-fluid">
            <div className="row border-top px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100 collapsed" onClick={toggleNav} style={{ "height": "65px", "marginTop": "-1px", "padding": "0 30px" }}>
                        <h6 className="m-0">Categories</h6>
                        <i className="fa fa-angle-down text-dark"></i>
                    </a>
                    <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style={{ "width": "calc(100% - 30px)", "zIndex": "2" }}>
                        <div className="navbar-nav w-100 overflow-hidden" style={{ "height": "410px" }}>
                            <div className="nav-item dropdown">
                                <a className="nav-link" data-toggle="dropdown" onClick={toggleDropdown}>Dresses<i className="fa fa-angle-down float-right mt-1"></i></a>
                                <div id="dropdown-vertical" className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0" >
                                    <a href="" className="dropdown-item">Men's Dresses</a>
                                    <a href="" className="dropdown-item">Women's Dresses</a>
                                    <a href="" className="dropdown-item">Baby's Dresses</a>
                                </div>
                            </div>
                            <a href="" className="nav-item nav-link">Shirts</a>
                            <a href="" className="nav-item nav-link">Jeans</a>
                            <a href="" className="nav-item nav-link">Swimwear</a>
                            <a href="" className="nav-item nav-link">Sleepwear</a>
                            <a href="" className="nav-item nav-link">Sportswear</a>
                            <a href="" className="nav-item nav-link">Jumpsuits</a>
                            <a href="" className="nav-item nav-link">Blazers</a>
                            <a href="" className="nav-item nav-link">Jackets</a>
                            <a href="" className="nav-item nav-link">Shoes</a>
                        </div>
                    </nav>
                </div>
                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <a href="" className="text-decoration-none d-block d-lg-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">Shop</span>Box</h1>
                        </a>
                        <button type="button" className="navbar-toggler collapsed" onClick={toggleNavbarCollapse} data-toggle="collapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <a href="index.html" className="nav-item nav-link">Home</a>
                                <a href="shop.html" className="nav-item nav-link">Shop</a>
                                <a href="detail.html" className="nav-item nav-link">Shop Detail</a>
                                <div className="nav-item dropdown" onClick={clickDropdownToggle}>
                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                                        <a href="checkout.html" className="dropdown-item">Checkout</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavBar;