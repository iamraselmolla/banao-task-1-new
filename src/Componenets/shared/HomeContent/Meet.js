import React from 'react';
import Author from '../Author';

const Meet = () => {
    return (
        <div className="single-post border border-1 my-2 rounded">
            <img className="img-fluid" src="img/a1 (1).png" />
            <div className="px-3 py-3">
                <span className="fw-bolder mb-3 d-block">
                    <span className="me-2">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M712 304c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H384v48c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-48H184v136h656V256H712v48z">
                            </path>
                            <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zm0-448H184V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136z">
                            </path>
                        </svg>
                    </span>
                    Meetup
                </span>
                <div className="section_title d-flex justify-content-between">
                    <h4 className="fw-bolder">
                        Finance &amp; Investment Elite Social Mixer @Lujiazui
                    </h4>
                    <span className="fw-bolder position-relative">
                        ...
                    </span>
                </div>
                <div className="d-flex fw-bold my-2">
                    <div>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z">
                            </path>
                        </svg>
                        Fri, 12 Oct, 2018
                    </div>
                    <div className="ms-5">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z">
                            </path>
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75a2.5 2.5 0 010-5 2.5 2.5 0 010 5z">
                            </path>
                        </svg>
                        Ahmedabad, India
                    </div>
                </div>
                <a href="https://iamraselmolla.netlify.app" target="_blank">
                    <button className="btn mt-2 text-danger fw-bold w-100 bg-transparent border border-1 rounded">
                        Visit Website
                    </button>
                </a>
                <Author name="Ronal Jones" img="ronal" view="1.4" />

            </div>
        </div>
    );
};

export default Meet;