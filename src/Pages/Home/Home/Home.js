import React from 'react';
import Banner from '../Banner/Banner';
import NextTrip from '../NextTrip/NextTrip';
import OurOffers from '../OurOffers/OurOffers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurOffers></OurOffers>
            <NextTrip></NextTrip>
        </div>
    );
};

export default Home;