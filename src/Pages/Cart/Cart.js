import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    const confirmIcon = <FontAwesomeIcon icon={faCheckCircle} />

    let totalQuantity = 0;
    let total = 0;

    for (const item of cart) {
        if (!item.quantity) {
            item.quantity = 1;
        }
        total = total + item.price * item.quantity;
        totalQuantity = totalQuantity + item.quantity;
    }

    return (
        <div>
            <h3 className="text-warning fs-1 fw-bold border-bottom border-dark border-3 ms-2">Cart</h3>
            <div className="text-start ms-2">
                <p>Booked: {totalQuantity}</p>
                <p>Total Price</p>
                <p> $ {total}</p>
                <Link to="/myorders">
                    <Button variant="warning" className="fw-bold">{confirmIcon}Review</Button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;