import React from 'react';
import Author from '../Author';

const Job = () => {
    return (
        <div className="single-post border border-1 my-2 rounded">
            <div className="px-3 py-3">
                <span className="fw-bolder mb-3 d-block">
                    <span className="me-2">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M256 23c-35 0-62 17.92-79.3 41.71-11.9 16.38-19.6 35.49-23.2 54.29H172c3.4-15.2 9.9-30.77 19.3-43.71C206 55.08 227 41 256 41s50 14.08 64.7 34.29c9.4 12.94 15.9 28.51 19.3 43.71h18.5c-3.6-18.8-11.3-37.91-23.2-54.29C318 40.92 291 23 256 23zM88.25 137L57.81 487H454.2l-30.4-350H88.25zM160 160a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm192 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16z">
                            </path>
                        </svg>
                    </span>
                    Job
                </span>
                <div className="section_title d-flex justify-content-between">
                    <h4 className="fw-bolder">
                        Software Developer
                    </h4>
                    <span className="fw-bolder position-relative">
                        ...
                    </span>
                </div>
                <div className="d-flex fw-bold my-2">
                    <div>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z">
                            </path>
                        </svg>
                        Innovaccer Analytics Private Ltd.
                    </div>
                    <div className="ms-5">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z">
                            </path>
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75a2.5 2.5 0 010-5 2.5 2.5 0 010 5z">
                            </path>
                        </svg>
                        Noida, India
                    </div>
                </div>
                <a href="#" target="_blank">
                    <button className="btn mt-2 text-success fw-bold w-100 bg-transparent border border-1 rounded">
                        Apply on timejobs
                    </button>
                </a>
                <Author name="Joseph Gray" img="joshep" view="1.4" />

            </div>
        </div>
    );
};

export default Job;