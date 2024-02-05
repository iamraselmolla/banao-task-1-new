import React from 'react';
import Author from '../Author';

const Article = () => {
    return (
        <div className="single-post border border-1 my-2 rounded">
            <img className="img-fluid" src="img/a1 (3).png" alt="Article Thumbnail" />
            <div className="px-3 py-3">
                <span className="fw-bolder mb-3 d-block">
                    <span className="me-2">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z">
                            </path>
                        </svg>
                    </span>
                    Article
                </span>
                <div className="section_title d-flex justify-content-between">
                    <h4 className="fw-bolder">
                        What if famous brands had regular fonts? Meet RegulaBrands!
                    </h4>
                    <span className="fw-bolder position-relative">
                        ...
                    </span>
                </div>
                <p className="text-muted">
                    I’ve worked in UX for the better part of a decade. From now on, I plan
                    to rei…
                </p>
                <Author img="sarthok" name="Sarthok Kamra" view="1.4" />
            </div>
        </div>
    );
};

export default Article;
