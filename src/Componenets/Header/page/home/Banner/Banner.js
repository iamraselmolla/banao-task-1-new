import React from 'react';
import './banner.css'
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <section className='banner' style={{ backgroundImage: `url('img/homeBanner.png')` }}>
            <div className="container">
                <Button className='bg-transparent position-relative d-block d-sm-block d-md-none text-white float-end  border border-white '>
                    Join Group
                </Button>
            </div>
            <div className="container position-relative text-white">

                <div className='banner-header' style={{ marginTop: '20%' }}>
                    <h1 className=''>
                        Computer Engineering
                    </h1>
                    <p>
                        142,765 Computer Engineers follow this
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;