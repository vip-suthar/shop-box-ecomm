import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout, update } from '../actions/userActions';
import { listMyOrders } from '../actions/orderActions';
import { useDispatch, useSelector } from 'react-redux';

function ProfileScreen(props) {
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  // const dispatch = useDispatch();

  // const userSignin = useSelector(state => state.userSignin);
  // const { userInfo } = userSignin;
  // const handleLogout = () => {
  //   dispatch(logout());
  //   props.history.push("/signin");
  // }
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(update({ userId: userInfo._id, email, name, password }))
  // }
  // const userUpdate = useSelector(state => state.userUpdate);
  // const { loading, success, error } = userUpdate;

  // const myOrderList = useSelector(state => state.myOrderList);
  // const { loading: loadingOrders, orders, error: errorOrders } = myOrderList;
  // useEffect(() => {
  //   if (userInfo) {
  //     console.log(userInfo.name)
  //     setEmail(userInfo.email);
  //     setName(userInfo.name);
  //     setPassword(userInfo.password);
  //   }
  //   dispatch(listMyOrders());
  //   return () => {

  //   };
  // }, [userInfo])

  return (
    <section className="h-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card">
              <div className="rounded-top text-white d-flex flex-row" style={{"backgroundColor": "#000","height":"200px"}}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{"width": "150px"}}>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                    style={{"width": "150px", "zIndex": "1"}} />
                  <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark"
                    style={{"zIndex": "1"}}>
                    Edit profile
                  </button>
                </div>
                <div className="ms-3" style={{"marginTop": "130px"}}>
                  <h5>Andy Horwitz</h5>
                  <p>New York</p>
                </div>
              </div>
              <div className="p-4 text-black" style={{"backgroundColor": "#f8f9fa"}}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <p className="mb-1 h5">253</p>
                    <p className="small text-muted mb-0">Photos</p>
                  </div>
                  <div className="px-3">
                    <p className="mb-1 h5">1026</p>
                    <p className="small text-muted mb-0">Followers</p>
                  </div>
                  <div>
                    <p className="mb-1 h5">478</p>
                    <p className="small text-muted mb-0">Following</p>
                  </div>
                </div>
              </div>
              <div className="card-body p-4 text-black">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{"backgroundColor": "#f8f9fa"}}>
                    <p className="font-italic mb-1">Web Developer</p>
                    <p className="font-italic mb-1">Lives in New York</p>
                    <p className="font-italic mb-0">Photographer</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <p className="lead fw-normal mb-0">Recent Products</p>
                  <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                </div>
                <div className="row g-2">
                  <div className="col mb-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </div>
                  <div className="col mb-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </div>
                </div>
                <div className="row g-2">
                  <div className="col">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </div>
                  <div className="col">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  /* return <div className="profile">
    <div className="profile-info">
      <div className="form">
        <form onSubmit={submitHandler} >
          <ul className="form-container">
            <li>
              <h2>User Profile</h2>
            </li>
            <li>
              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}
              {success && <div>Profile Saved Successfully.</div>}
            </li>
            <li>
              <label htmlFor="name">
                Name
          </label>
              <input value={name} type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="email">
                Email
          </label>
              <input value={email} type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input value={password} type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
              </input>
            </li>

            <li>
              <button type="submit" className="button primary">Update</button>
            </li>
            <li>
              <button type="button" onClick={handleLogout} className="button secondary full-width">Logout</button>
            </li>

          </ul>
        </form>
      </div>
    </div>
    <div className="profile-orders content-margined">
      {
        loadingOrders ? <div>Loading...</div> :
          errorOrders ? <div>{errorOrders} </div> :
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.totalPrice}</td>
                  <td>{order.isPaid}</td>
                  <td>
                    <Link to={"/order/" + order._id}>DETAILS</Link>
                  </td>
                </tr>)}
              </tbody>
            </table>
      }
    </div>
  </div> */
}

export default ProfileScreen;