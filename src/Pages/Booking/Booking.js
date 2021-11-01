import { faCartPlus, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Booking.css';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Booking = () => {
    const { id } = useParams();
    // console.log(id)
    const [tours, setTours] = useState([]);
    const [tour, setTour] = useState({});
    const [cart, setCart] = useState([]);

    const dollarIcon = <FontAwesomeIcon icon={faDollarSign} />
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />

    useEffect(() => {
        fetch(`http://localhost:5000/places/${id}`)
            .then(res => res.json())
            .then(data => setTour(data));
    }, []);

    useEffect(() => {
        fetch("http://localhost:5000/places")
            .then(res => res.json())
            .then(data => setTours(data));
    }, []);

    useEffect(() => {
        if (tours.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                // console.log(tour);
                const addedTour = tours.find(singleTour => singleTour._id === key);
                // console.log(key, addedTour);
                storedCart.push(addedTour);
            }
            setCart(storedCart);
        }
    }, [tours]);

    const handleAddToCart = (tour) => {
        const newCart = [...cart, tour];
        setCart(newCart);
        addToDb(tour._id);
    };

    return (
        <div>
            <div className="d-flex justify-content-evenly">
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
                            <Button variant="warning" className="fw-bold" onClick={() => handleAddToCart(tour)}>{cartIcon} Add to cart</Button>
                            {/* <Link to="/myorders">
                            <Button variant="warning" className="fw-bold" onClick={handleAddToCart}>Add to cart</Button>
                        </Link> */}
                        </div>
                    </div>
                </div>
                <div className="border-start border-warning border-3 me-5 mt-5">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Booking;