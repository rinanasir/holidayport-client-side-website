import React, { useEffect, useState } from 'react';
import OurOffer from '../OurOffer/OurOffer';

const OurOffers = () => {
    const [ourOffers, setOurOffers] = useState([]);

    useEffect(() => {
        fetch('https://protected-ocean-59347.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setOurOffers(data));
    }, [])
    return (
        <div id="our-offers" className="mx-5 px-3">
            <h1 className="mt-5 text-warning fs-2 fw-bold">Recommended Tours</h1>
            <div className="row mx-5 px-5 my-5">
                {
                    ourOffers.map(ourOffer => <OurOffer
                        key={ourOffer._id}
                        ourOffer={ourOffer}
                    ></OurOffer>)
                }
            </div>

        </div>
    );
};

export default OurOffers;