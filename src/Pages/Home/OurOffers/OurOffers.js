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
        <div id="our-offers">
            <h2 className="my-5">Stay where you love</h2>
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