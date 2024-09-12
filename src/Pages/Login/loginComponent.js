import React, { useState } from 'react';
import './login.css';
import { loginUserAction } from '../../store/login_slice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    email: '',
    password: ''
  });

  const formHandleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserAction({formFields, navigate}));
  }

  return (
    <div style={{paddingTop: '20%'}}>
      <div className="main_form">
        <h3 className="form_title">User Login Form</h3>
        <form>

          <div className="container">
            <label htmlFor="email"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="email" required 
              value={formFields.email}
              onChange={formHandleChange}
            />

            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required 
              value={formFields.password}
              onChange={formHandleChange}
            />
          </div>

          <div className="container_footer" style={{ backgroundColor: '#f1f1f1'}} >
            <span className="psw">Forgot <a href="#">password?</a></span>
            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default LoginComponent;