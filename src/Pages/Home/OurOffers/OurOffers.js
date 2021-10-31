import React, { useEffect, useState } from 'react';
import OurOffer from '../OurOffer/OurOffer';

const OurOffers = () => {
    const [ourOffers, setOurOffers] = useState([]);

    useEffect(() => {
        fetch('tours.json')
            .then(res => res.json())
            .then(data => setOurOffers(data));
    }, [])
    return (
        <div id="our-offers" className="mx-5 px-3">
            <h2 className="my-5">Recommended Tours</h2>
            <div className="row mx-5 px-5 my-5">
                {
                    ourOffers.map(ourOffer => <OurOffer
                        key={ourOffer.id}
                        ourOffer={ourOffer}
                    ></OurOffer>)
                }
            </div>

        </div>
    );
};

export default OurOffers;