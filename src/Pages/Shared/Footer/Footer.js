import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const travelIcon = <FontAwesomeIcon icon={faPlaneDeparture}></FontAwesomeIcon>
    return (
        <div>
            <footer className="footer-p">
                <p className="text-warning"> © Copyright 2021 | All rights reserved. {travelIcon} Holidayport</p>
            </footer>
        </div>
    );
};

export default Footer;