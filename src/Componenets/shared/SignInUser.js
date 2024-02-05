import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SignInUser = ({ showRegister, setShowRegister }) => {
    return (
        <div className="signin-user pb-2 px-4 pt-4">
            <div className="row">
                <div className="col-md-6 col-sm-12 col-xl-6">
                    <div className="form-part">
                        <h3 className="fw-bold mb-3">Sign in</h3>
                        <div className="register-user-form">
                            <form>
                                <div className="row">
                                    <input placeholder="Email" type="email" className="form-control rounded-0 fw-bold py-3  border-bottom-none text-muted" id="emailinput2" />
                                </div>
                                <div className="row">
                                    <input placeholder="Password" type="password" className="form-control rounded-0 fw-bold py-3  text-muted" id="passinputlogin2" />

                                </div>

                                <div className="row"><button type="submit" className="btn mt-3 py-2 w-100 rounded-5 fw-bold btn-primary">Sign in</button></div>
                            </form>
                            <button className="border fw-bold mt-4 w-100 px-3 py-2 bg-transparent border-1 rounded-0">
                                <FaFacebook className='text-primary me-1' size={19} />
                                Sign up with Facebook
                            </button>
                            <button className="border fw-bold mt-2 w-100 px-3 py-2 bg-transparent border-1 rounded-0">
                                <FcGoogle className='me-1' size={19} />
                                Sign up with Goggle
                            </button>

                            <p className="fw-bold text-center  mt-4">
                                Forgot Password?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-none d-sm-none d-md-block d-flex  align-items-center flex-column text-center">
                    <p className="mb-0 text-end">Didn't have an account yet? <span onClick={() => setShowRegister(!showRegister)} className="text-primary fw-bold" style={{ cursor: 'pointer' }}>Create new for free</span></p>
                    <img src="register.png" className="img-fluid" alt="Register user" />

                </div>
            </div>
        </div>
    );
};

export default SignInUser;