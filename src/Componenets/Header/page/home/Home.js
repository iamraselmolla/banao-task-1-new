import React from 'react';


import SearchInput from './SearchInput';
import Article from '../../../shared/HomeContent/Article';
import Meet from '../../../shared/HomeContent/Meet';
import Job from '../../../shared/HomeContent/Job';
import Education from '../../../shared/HomeContent/Education';
import { FaPencilAlt } from 'react-icons/fa'

const Home = () => {


    return (
        <main>
            <section>
                <div className="container">
                    <div className="align-items-center border-bottom d-flex d-md-flex d-none d-sm-none justify-content-between pb-2">
                        <div className="menu-part py-3 mt-2">
                            <a className="text-decoration-none px-2 fw-bold text-black text-light " href="/">All Posts (32)</a>
                            <a className="text-decoration-none px-2 fw-bold text-black" href="/">Article</a>
                            <a className="text-decoration-none px-2 fw-bold text-black" href="/">Events</a>
                            <a className="text-decoration-none px-2 fw-bold text-black" href="/">Jobs</a>
                            <a className="text-decoration-none px-2 fw-bold text-black" href="/">Education</a>
                        </div>

                        <div className="post-part">
                            <div className=' d-none d-sm-none d-md-block d-lg-block'>
                                <button className="px-3 fw-bolder py-2 rounded border-0" style={{ background: 'rgb(237, 238, 240)' }}>Write a Post <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path><path d="M7 10l5 5 5-5z"></path></svg>
                                </button>

                                <button className="px-3 bg-primary text-white fw-bolder py-2 rounded border-0 ms-4">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg> Join group </button>
                            </div>

                        </div>
                    </div>
                    <div className="d-sm-flex   d-md-none d-lg-none d-flex justify-content-between align-items-center ">


                        <div className="text-decoration-none px-2 fw-bold text-black text-light ">All Posts (32)</div>

                        <div>
                            <select className="me-3 bg-light  fw-bolder border-0 px-2 py-2 fw-bold" name="" id=""><option value="">Filter: All</option><option value="">Article</option><option value="">Education</option><option value="">MeetUp</option><option value="">Jobs</option></select>
                        </div>
                    </div>
                </div>
            </section>
            <div className="postBtnForAndorid bg-danger  d-block d-sm-block d-md-block d-xl-none d-inline-block text-white">
                <FaPencilAlt />
            </div>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <Article />
                            <Education />
                            <Meet />
                            <Job />
                        </div>
                        <div className="col-md-4 d-none d-sm-none d-md-block pt-5 offset-md-1">
                            <SearchInput />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;


{/* <main>

<CategoryMenu></CategoryMenu>
{/* <div className='register-title bg-success py-3 bg-opacity-25'>
    <p className="mb-0 text-success fw-bold text-center">
        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
    </p>
</div>
<div className="register-user pt-4">
    <div className="row">
        <div className="col-md-6">
            <div className="form-part">
                <h3 className="fw-bold mb-3">
                    Welcome Back
                </h3>
                <div className="register-user-form">
                    <form>

                        <div className="row">
                            <input placeholder='Email' type="email" className="form-control rounded-0 fw-bold py-3  border-bottom-none text-muted" id="emailinputlogin" />
                        </div>
                        <div className="row">
                            <input placeholder='Password' type="password" className="form-control rounded-0 fw-bold py-3 text-muted" id="passinput" />
                        </div>
                        <div className="row">
                            <button type="submit" className="btn mt-3 py-3 w-100 rounded-5 fw-bold btn-primary">Login</button>
                        </div>
                    </form>
                    <button className="border fw-bold mt-4 w-100 px-3 py-2 bg-transparent border-1 rounded-0">
                        <FaFacebook className='text-primary mr-2 fs-5'></FaFacebook>  Sign up with Facebook
                    </button>
                    <button className="border fw-bold mt-2 w-100 px-3 py-2 bg-transparent border-1 rounded-0">
                        <FcGoogle className='mr-2 fs-5'></FcGoogle>  Sign up with Goggle
                    </button>
                    <div className="forget-pass fw-bold mt-3 text-center">
                        Forgot Password?
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 text-center">
            <p className="mb-0">
                Don’t have an account yet? <span style={{ cursor: 'pointer' }} className='text-success fw-bolder'>
                    Create new for free!
                </span>
            </p>
            <img src="register.png" className='img-fluid' alt="Register user" />
            <p className="mt-4 text-muted">
                By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
        </div>
    </div>
</div> */}


// </main > 