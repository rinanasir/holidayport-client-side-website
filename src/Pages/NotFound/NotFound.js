import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import errorimage from '../../images/error.jpg';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '34%' }} src={errorimage} alt="" />
            <br />
            <Link to="/"><Button variant="warning" className="fw-bold">Home</Button></Link>
        </div>
    );
};

export default NotFound;