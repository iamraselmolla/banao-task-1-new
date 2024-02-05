import React from 'react';
import Author from '../Author';

const Education = () => {
    return (
        <div className="single-post border border-1 my-2 rounded">
            <img className="img-fluid" src="img/a1 (2).png" />
            <div className="px-3 py-3">
                <span className="fw-bolder mb-3 d-block">
                    <span className="me-2">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M367.717 25.318L325.94 63.475l49.953 38.296 26.002-50.247-34.178-26.205zm-62.71 41.608l-38.562 49.242 70.936 55.66 38.604-49.12-70.978-55.782zm-50.495 64.28l-58.035 73.85 118.628 88.885s3.513 2.384 5.48 5.904c2.02 3.612 1.81 6.935 1.81 6.935v128.544H297.14v-24.56H89.255v24.56H61.51v59.358H432.963V338.184c-9.25 4.65-19.462 7.077-29.817 7.084-36.706 0-66.463-29.758-66.462-66.465.034-23.723 12.71-45.63 33.26-57.48L254.51 131.206zM185 220.175l-68.21 87.103 112.83 1.668 27.495-34.984L185 220.175zm218.146 11.285a47.344 47.344 0 0 0-47.34 47.343 47.344 47.344 0 0 0 47.34 47.343 47.344 47.344 0 0 0 47.344-47.343 47.344 47.344 0 0 0-47.344-47.344zm0 17.67a29.674 29.674 0 0 1 29.676 29.673 29.674 29.674 0 0 1-29.676 29.674 29.674 29.674 0 0 1-29.673-29.674 29.674 29.674 0 0 1 29.673-29.674z">
                            </path>
                        </svg>
                    </span>
                    Education
                </span>
                <div className="section_title d-flex justify-content-between">
                    <h4 className="fw-bolder">
                        Tax Benefits for Investment under National Pension Scheme launched by
                        Government
                    </h4>
                    <span className="fw-bolder position-relative">
                        ...
                    </span>
                </div>
                <p className="text-muted">
                    I’ve worked in UX for the better part of a decade. From now on, I plan
                    to rei…
                </p>
                <Author name="Sarah West" img="sarah" view="1.4" ></Author>

            </div>
        </div>
    );
};

export default Education;