import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SignInUser from './SignInUser';
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

function RegisterModal(props) {
    const [showRegister, setShowRegister] = useState(true)
    const handleSignInModal = () => {
        setShowRegister(false)
    }
    return (
        <>

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <div onClick={props.onHide} className='closeModalButton position-absolute ' style={{ cursor: 'pointer' }}>
                    X
                </div>

                <div className='bg-success d-none d-sm-none d-md-block py-3 bg-opacity-25'>
                    <p className="mb-0 text-success fw-bold text-center px-3 py-2">Let's learn, share inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                </div>

                <Modal.Body>
                    {showRegister ? <>
                        <div className="register-user position-relative  pb-2 px-4 pt-4">
                            <div className="row">
                                <div className="col-md-6 col-sm-12 col-xl-6">
                                    <div className="form-part">
                                        <h3 className="fw-bold mb-3">Create Account</h3>

                                        <div className="register-user-form">
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6 p-0">
                                                        <input placeholder="First name" type="text" className="form-control rounded-0 fw-bold py-3 border-bottom-none text-muted" id="firstnameinput" />

                                                    </div>
                                                    <div className="col-md-6 p-0">
                                                        <input placeholder="last name" type="text" className="form-control rounded-0 fw-bold py-3 border-bottom-none text-muted border-left-none " id="lastnameinput" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <input placeholder="Email" type="email" className="form-control rounded-0 fw-bold py-3  border-bottom-none text-muted" id="emailinput" />
                                                </div>
                                                <div className="row">
                                                    <input placeholder="Password" type="password" className="form-control rounded-0 fw-bold py-3  border-bottom-none text-muted" id="passinputlogin" />

                                                </div>
                                                <div className="row">
                                                    <input placeholder="Confirm Password" type="password" className="form-control rounded-0 fw-bold py-3 text-muted" id="repssinput" />
                                                </div>
                                                <div className="row"><button type="submit" className="btn mt-3 py-2 w-100 rounded-5 fw-bold btn-primary">Create Account</button></div>
                                            </form>
                                            <button className="border fw-bold mt-4 w-100 px-3 py-2 bg-transparent border-1 rounded-0">
                                                <FaFacebook className='text-primary me-1' size={19} />
                                                Sign up with Facebook
                                            </button>
                                            <button className="border fw-bold mt-2 w-100 px-3 py-2 bg-transparent border-1 rounded-0">
                                                <FcGoogle className='me-1' size={19} />
                                                Sign up with Goggle
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-none d-sm-none d-md-block d-xl-block d-flex  align-items-center flex-column text-center">
                                    <p className="mb-0 text-end">Already have an account? <span onClick={handleSignInModal} className="text-primary fw-bold" style={{ cursor: 'pointer' }}>Sign In</span></p>
                                    <img src="register.png" className="img-fluid" alt="Register user" />
                                    <p className="mt-4 text-muted">By signing up, you agree to our Terms &amp; conditions, Privacy policy</p>
                                </div>
                            </div>
                        </div>
                    </> : <>
                        <SignInUser setShowRegister={setShowRegister} showRegister={showRegister} />
                    </>}

                    {/* Sign in Option */}
                </Modal.Body>
            </Modal >
        </>
    );
}

export default RegisterModal;