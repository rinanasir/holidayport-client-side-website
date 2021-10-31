import React from 'react';
import './OurOffer.css';

const OurOffer = ({ ourOffer }) => {
    console.log(ourOffer)
    const { name, price, about, image } = ourOffer;
    return (
        <div className="col-lg-12">
            <div className="d-flex justify-content-evenl align-items-center border border-2 rounded-2 border-warning my-3">
                <div className="image-style">
                    <img className="img-fluid rounded" src={image} alt="" />
                </div>
                <div>
                    <div className="text-start mx-5">
                        <h3>{name}</h3>
                        <h5>Price: {price}</h5>
                        <p>{about}</p>
                        <button>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurOffer;