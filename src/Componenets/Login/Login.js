import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container py-5">
            <div className="register-user pb-2 px-4 pt-4">
                <div className="row">
                    <div className="col-12">
                        <div className="form-part">
                            <h3 className="fw-bold mb-3">
                                Welcome Back !
                            </h3>
                            <div className="register-user-form">
                                <form>
                                    <div className="row">
                                        <input name='username' placeholder='Username' type="text" className="form-control rounded-0 fw-bold py-3  border-bottom-none text-muted" id="emailinput" />
                                    </div>
                                    <div className="row">
                                        <input name='password' placeholder='Password' type="password" className="form-control rounded-0 fw-bold py-3  text-muted" id="passinputlogin" />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <button type="submit" className="btn mt-3 py-2 px-5 w-100 rounded-5 fw-bold btn-success">Sign in</button>
                                        </div>
                                        <p className='fw-bold'>
                                            or, Create Account
                                        </p>
                                    </div>
                                </form>
                                <p className="fw-bolder">
                                    Forget Password? <Link className='text-decoration-none text-success' to="/forget-password">reset!</Link>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;