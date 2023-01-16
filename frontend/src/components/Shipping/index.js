import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShipping } from '../../actions/cartActions';

function Shipping(props) {

  const { loading, userInfo, error } = useSelector((state) => state.userSignin);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if ((!userInfo) || userInfo === null) navigate("/signin?redirect=/shipping");
  }, []);

  const { shipping } = useSelector(state => state.cart);

  const [fName, setFName] = useState(shipping?.firstName || "");
  const [lName, setLName] = useState(shipping?.lastName || "");
  const [email, setEmail] = useState(shipping?.email || "");
  const [mobile, setMobile] = useState(shipping?.mobile || "");
  const [addressL1, setAddressL1] = useState(shipping?.address.line1 || "");
  const [addressL2, setAddressL2] = useState(shipping?.address.line2 || "");
  const [country, setCountry] = useState(shipping?.address.country || "");
  const [city, setCity] = useState(shipping?.address.city || "");
  const [state, setState] = useState(shipping?.address.state || "");
  const [zipCode, setZipCode] = useState(shipping?.address.zipCode || "");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({
      "firstName": fName,
      "lastName": lName,
      "email": email,
      "mobile": mobile,
      "address": {
        "line1": addressL1,
        "line2": addressL2,
        "city": city,
        "state": state,
        "country": country,
        "zipCode": zipCode
      }
    }));
    
    navigate("/order-review");
  }
  return (
    <div className="mt-4 mb-4" style={{ marginLeft: "10%", width: "80%" }}>
      <h4 className="font-weight-semi-bold mb-4 text-center">Shipping Address</h4>
      <form onSubmit={submitHandler} className="row">
        <div className="col-md-6 form-group">
          <label>First Name</label>
          <input className="form-control" type="text" placeholder="John" required={true} value={fName} onChange={(e) => { setFName(e.target.value) }} />
        </div>
        <div className="col-md-6 form-group">
          <label>Last Name</label>
          <input className="form-control" type="text" placeholder="Doe" required={true} value={lName} onChange={(e) => { setLName(e.target.value) }} />
        </div>
        <div className="col-md-6 form-group">
          <label>E-mail</label>
          <input className="form-control" type="email" placeholder="example@email.com" required={true} value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="col-md-6 form-group">
          <label>Mobile No</label>
          <input className="form-control" type="number" placeholder="+123 456 789" required={true} value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </div>
        <div className="col-md-6 form-group">
          <label>Address Line 1</label>
          <input className="form-control" type="text" placeholder="123 Street" value={addressL1} required={true} onChange={(e) => setAddressL1(e.target.value)} />
        </div>
        <div className="col-md-6 form-group">
          <label>Address Line 2</label>
          <input className="form-control" type="text" placeholder="123 Street" value={addressL2} onChange={(e) => setAddressL2(e.target.value)} />
        </div>
        <div className="col-md-6 form-group">
          <label>Country</label>
          <select className="custom-select" value={country} required={true} onChange={(e) => setCountry(e.target.value)}>
            <option selected={true} disabled={true}>--Select Country--</option>
            <option value="United States">United States</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
          </select>
        </div>
        <div className="col-md-6 form-group">
          <label>City</label>
          <input className="form-control" type="text" placeholder="New York" required={true} value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="col-md-6 form-group">
          <label>State</label>
          <input className="form-control" type="text" placeholder="New York" required={true} value={state} onChange={(e) => setState(e.target.value)} />
        </div>
        <div className="col-md-6 form-group">
          <label>ZIP Code</label>
          <input className="form-control" type="number" placeholder="123" required={true} value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
        </div>
        {/* <div className="col-md-12 form-group">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="shipto" />
              <label className="custom-control-label" htmlFor="shipto" data-toggle="collapse" data-target="#shipping-address">Ship to different address</label>
            </div>
          </div> */}
        <div className="col-md-12 form-group">
          <button type="submit" className="btn btn-block btn-primary my-3 py-3">Save and Review Order</button>
        </div>
      </form>
    </div>
  )

}
export default Shipping;