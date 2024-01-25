import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillLockFill } from 'react-icons/bs';

import { Button, Container, TextField, CssBaseline } from '@mui/material';

import LoginService from './loginservice';

const LoginFrame = () => {
  const [loginDetails, setLoginDetails] = useState({
    userName: '',
    password: '',
  });

  const navigate = useNavigate();

  const changeUserNameHandler = (event) => {
    setLoginDetails({ ...loginDetails, userName: event.target.value });
  };

  const changePasswordHandler = (event) => {
    setLoginDetails({ ...loginDetails, password: event.target.value });
  };

  const submitLoginDetails = async (event) => {
    event.preventDefault();

    const { userName, password } = loginDetails;

    if (userName.trim().length === 0) {
      toast.error('Please Enter Username!');
    } else if (password.trim().length === 0) {
      toast.error('Please Enter Password!');
    } else {
      try {
        const res = await LoginService.login({ userName, password });

        sessionStorage.setItem('IsLoggedIn', true);
        sessionStorage.setItem('UserId', res.data.userId);
        sessionStorage.setItem('UserNamee', res.data.userName);
        sessionStorage.setItem('fullName', res.data.fullName);
        sessionStorage.setItem('Location', res.data.location);

        if (res.data.userGroup === 'User') {
          window.sessionStorage.setItem('UserGroup', 'user');
          window.sessionStorage.setItem('role', res.data.userGroup);
          window.sessionStorage.setItem('Dashboard', 'User_Financial_Dashboard');
          navigate('/Homepage');
        } else if (res.data.userGroup === 'Finance Manager') {
          window.sessionStorage.setItem('UserGroup', 'FM');
          window.sessionStorage.setItem('role', res.data.userGroup);
          window.sessionStorage.setItem('Dashboard', 'User_Financial_Dashboard');
          navigate('/FM_Project_View');
        } else {
          window.sessionStorage.setItem('Dashboard', 'Admin_Main_Dashboard');
          window.sessionStorage.setItem('UserGroup', 'admin');
          window.sessionStorage.setItem('role', res.data.userGroup);
          navigate('/Admin_Home_Page');
        }
      } catch (error) {
        toast.error('Invalid Credentials!');
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="flex_center mx-auto my-auto container-fluid">
        <div className="row pt-3">
          <div className="width_set " />
          <div className="card outline mx-auto ">
            <img
              /* src={require('./images/logo.jpg')} */ 
              alt="#"
              className="img-fluid img1 p-4 "
              style={{ height: '250%', width: '100%' }} 
             /> 
            <div className="outline mx-auto mt-3 card-body p-3 d-flex flex-column align-items-center">
              <form className="text-center">
                <div className="mb-3">
                  <div className="flexing mb-3">
                    <span className="icon text-dark p-2">
                      <FaUserAlt />
                    </span>
                    <TextField
                      type="text"
                      id="form2Example1"
                      className="form-control form-control-lg"
                      placeholder="UserName"
                      name="userName"
                      value={loginDetails.userName}
                      onChange={changeUserNameHandler}
                      aria-label="Username"
                      fullWidth
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="flexing">
                    <span className="icon text-dark p-2">
                      <BsFillLockFill />
                    </span>
                    <TextField
                      type="password"
                      id="form2Example2"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      name="password"
                      value={loginDetails.password}
                      onChange={changePasswordHandler}
                      fullWidth
                    />
                  </div>
                </div>
                <div className="d-grid mx-auto">
                  <Button
                    type="submit"
                    variant="contained"
                    className="btn btn-primary"
                    onClick={submitLoginDetails}
                    style={{ width: '100%', maxWidth: '200px', margin: 'auto' }}
                  >
                    LOGIN
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginFrame;
