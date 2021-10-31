import React from 'react';
import { Button } from 'react-bootstrap';
import './Subscribe.css';
import image1 from '../../../images/holidayport.png';

const Subscribe = () => {
    return (
        <div className="d-flex justify-content-evenly border border-2 border-warning rounded-2 mx-5 my-5 px-5 py-5">
            <div className="subs-img">
                <img src={image1} alt="" />
            </div>
            <div className="text-warning fw-bolder text-start ml-5 mt-5">
                <h3 className="fw-bolder">Subscribe to see our Secret Deal</h3>
                <input type="email" className="email-input" placeholder="Email" />
                <br />
                <br />
                <Button variant="warning" className="fw-bold">Sign me up !</Button>
            </div>
        </div>
    );
};

export default Subscribe;