import React from 'react';
import { MdOutlineShare } from 'react-icons/md'
import { FaRegEye } from 'react-icons/fa'

const Author = ({ name, img, view }) => {
    return (
        <>
            <div className="">
                <div className="d-flex mt-3 justify-content-between align-items-center">
                    <div className="user d-flex align-items-center gap-3">
                        <img className="img-fluid" src={`img/author/${img}.png`} alt="User Avatar" />
                        <div>
                            <p className="m-0 fw-bold">
                                {name}
                            </p>
                            <div className='d-block d-sm-block d-md-none'>
                                <FaRegEye />

                                {view}k views
                            </div>
                        </div>
                    </div>
                    <div className="share-view d-flex">
                        <div className="fw-bold d-flex gap-5 align-items-center text-muted">
                            <div className='d-none d-sm-none d-md-block'>
                                <FaRegEye />

                                {view}k views
                            </div>
                            <div>
                                <div className='bg-light p-2 rounded-2 d-none d-sm-none d-md-block d-flex justify-content-center align-items-center'>
                                    <MdOutlineShare size={25} />
                                </div>
                                <div className='bg-light d-block d-sm-block d-md-none rounded-1 flex justify-content-center  align-items-center p-2'>
                                    <MdOutlineShare /> Share

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Author;