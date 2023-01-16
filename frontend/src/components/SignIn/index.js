import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { signin } from '../../actions/userActions';

function SignIn(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, userInfo, error } = useSelector(state => state.userSignin);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  }

  return (
    <div className="wrapper">
      <form className="form-signin" onSubmit={submitHandler}>
        <h2 className="form-signin-heading">Sign In</h2>

        <label className="form-label" htmlFor="email-input">Email</label>
        <div className="input-group mb-3">
          <span className="input-group-text"><i className="fa fa-envelope"></i></span>
          <input id="email-input" type="email" className="form-control" placeholder="abc@email.com" onChange={e => {setEmail(e.target.value)}} required="" autoFocus="" />
        </div>

        <label className="form-label" htmlFor="password-input">Password</label>
        <div className="input-group mb-3">
          <span className="input-group-text"><i className="fa fa-lock"></i></span>
          <input id="password-input" type="password" className="form-control" placeholder="*******" onChange={e => {setPassword(e.target.value)}} required="" autoFocus="" />
        </div>
        <a className="forgot-password" href="#">I forgot my password</a>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
      </form>
      <p className="account-signup">Don't have an account? <a href="/signup">Sign up here</a> </p>
    </div>
  )
}
export default SignIn;