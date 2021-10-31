import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { tourkey } = useParams();
    const [tour, setTour] = useState({});

    useEffect(() => {
        fetch('tours.json')
            .then(res => res.json())
            .then(data => setTour(data));
    }, [])

    return (
        <div>
            <h2>{tour.name}</h2>
        </div>
    );
};

export default Booking;