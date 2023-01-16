import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function HeaderBar(props) {

    const { loading, userInfo, error } = useSelector(state => state.userSignin);
    const { cartItems } = useSelector(state => state.cart);

    useEffect(() => {
    }, [userInfo]);

    return (
        <div className="row align-items-center py-3 px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <Link href="/" className="text-decoration-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">Shop</span>Box</h1>
                </Link>
            </div>
            <div className="col-lg-6 col-6 text-left">
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products" />
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary">
                                <i className="fa fa-search" />
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-3 col-6 text-right">
                <Link to="/cart" className="btn border">
                    <i className="fa fa-shopping-cart text-primary"></i>    
                    <span className="badge text-primary">{cartItems?.length}</span>
                </Link>
                {userInfo && userInfo !== null ?
                    <Link to={"/users/" + userInfo.id} className="btn border" title={userInfo.name}>
                        {/* <img src="" /> */}
                        <i className="fa fa-user text-primary"></i>
                        <span className="badge text-dark">{userInfo.name}</span>
                    </Link>
                    :
                    <Link to="/signin" className="btn border">
                        <i className="fa fa-user text-primary"></i>
                        <span className="badge text-primary">Login</span>
                    </Link>
                }
            </div>
        </div>
    );
}

export default HeaderBar;