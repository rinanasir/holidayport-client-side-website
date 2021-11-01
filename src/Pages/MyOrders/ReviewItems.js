import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';

const ReviewItems = (props) => {
    const { name, price, quantity, _id } = props.tour;
    const { handleRemove } = props;
    const removeIcon = <FontAwesomeIcon icon={faTimes} />

    return (
        <div className="border-bottom border-dark border-3 mb-3 pb-2">
            <h4>Tour: {name}</h4>
            <p>Price: {price}</p>
            <p>Booked for: {quantity}</p>
            <Button onClick={() => handleRemove(_id)} variant="warning" className="fw-bold text-danger">{removeIcon} Cancel Tour</Button>
        </div>
    );
};

export default ReviewItems;