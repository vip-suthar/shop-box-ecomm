import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../actions/userActions';

function SignUp(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const { loading, userInfo, error } = useSelector(state => state.userRegister);

  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if(password === rePassword) dispatch(register(name, email, password));
  }
  return (
    <div className="wrapper">
      <form className="form-signin" onSubmit={submitHandler}>
        <h2 className="form-signin-heading">Sign Up</h2>

        <label className="form-label" htmlFor="name-input">Name</label>
        <div className="input-group mb-3">
          <span className="input-group-text"><i className="fa fa-envelope"></i></span>
          <input id="name-input" type="text" className="form-control" placeholder="Mark John" onChange={e => { setName(e.target.value) }} required="" />
        </div>

        <label className="form-label" htmlFor="email-input">Email</label>
        <div className="input-group mb-3">
          <span className="input-group-text"><i className="fa fa-envelope"></i></span>
          <input id="email-input" type="email" className="form-control" placeholder="abc@email.com" onChange={e => { setEmail(e.target.value) }} required="" />
        </div>

        <label className="form-label" htmlFor="password-input">Password</label>
        <div className="input-group mb-3">
          <span className="input-group-text"><i className="fa fa-lock"></i></span>
          <input id="password-input" type="password" className="form-control" placeholder="*******" onChange={e => { setPassword(e.target.value) }} required="" />
        </div>

        <label className="form-label" htmlFor="repassword-input">Retype Password</label>
        <div className="input-group mb-3">
          <span className="input-group-text"><i className="fa fa-lock"></i></span>
          <input id="repassword-input" type="password" className="form-control" placeholder="*******" onChange={e => { setRePassword(e.target.value) }} required="" />
        </div>

        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
      </form>
      <p className="account-signup">Already have an account? <a href="/signin">Sign in here</a> </p>
    </div>
  )

  
}
export default SignUp;