import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.png';

const Banner = () => {
    return (
        <>
            <div>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
            </div>
        </>
    );
};

export default Banner;