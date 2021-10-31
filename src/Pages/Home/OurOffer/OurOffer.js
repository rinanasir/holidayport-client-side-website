import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import './OurOffer.css';

const OurOffer = ({ ourOffer }) => {
    const { name, price, about, image } = ourOffer;

    const dollarIcon = <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
    return (
        <div className="col-lg-12">
            <div className="d-flex justify-content-evenly align-items-center border border-2 rounded-2 border-secondary my-3">
                <div className="image-style">
                    <img className="img-fluid rounded" src={image} alt="" />
                </div>
                <div>
                    <div className="text-start mx-5">
                        <h3 className="text-warning fs-4 fw-bold">{name}</h3>
                        <p>{about}</p>
                        <h5 className="text-danger fw-bold">Price: {dollarIcon} {price}</h5>
                        <Button variant="warning" className="fw-bold">Book Now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurOffer;