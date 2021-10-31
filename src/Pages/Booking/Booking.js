import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { _id } = useParams();
    console.log(_id)
    const [tour, setTour] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/places/${_id}`)
            .then(res => res.json())
            .then(data => setTour(data));
    }, [])

    return (
        <div>
            <h2>booking id: {_id}</h2>
        </div>
    );
};

export default Booking;