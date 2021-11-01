import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const { id } = useParams();
    // console.log(_id)
    const [tour, setTour] = useState({});

    const dollarIcon = <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>

    useEffect(() => {
        fetch(`http://localhost:5000/places/${id}`)
            .then(res => res.json())
            .then(data => setTour(data));
    }, [])

    return (
        <div>
            <div>
                <h1 className="text-warning fs-1 fw-bold mt-5">{tour.name}</h1>
                <div className="d-flex justify-content-evenly align-items-center mx-5">
                    <div><img
                        src={tour.image}
                        className="d-block img-fluid rounded booking-image"
                        alt="" /></div>
                    <div className="text-start mx-5">
                        <p>{tour.about}</p>
                        <h5 className="text-danger fw-bold">Price: {dollarIcon} {tour.price}</h5>
                        <Link>
                            <Button variant="warning" className="fw-bold">Confirm Booking</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;