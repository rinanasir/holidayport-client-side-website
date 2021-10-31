import React from 'react';

const OurOffer = ({ ourOffer }) => {
    console.log(ourOffer)
    const { name, price, about, image } = ourOffer;
    return (
        <div className="col-lg-12">
            <div className="d-flex justify-content-evenly">
                <div>
                    <img className="img-fluid" src={image} alt="" />
                </div>
                <div className="">
                    <h3>{name}</h3>
                    <h5>Price: {price}</h5>
                    <p>{about}</p>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default OurOffer;