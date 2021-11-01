import React, { useEffect, useState } from 'react';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch('https://protected-ocean-59347.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setTours(data));
    }, [])
    return (
        <div>
            <h1 className="mt-5 text-warning fs-2 fw-bold">Choose Your Tours</h1>
            <div className="row mx-5 px-5 my-5">
                {
                    tours.map(tour => <Tour
                        key={tour._id}
                        tour={tour}
                    ></Tour>)
                }
            </div>
        </div>
    );
};

export default Tours;