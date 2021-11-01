import React from 'react';
import Banner from '../Banner/Banner';
import NextTrip from '../NextTrip/NextTrip';
import OurOffers from '../OurOffers/OurOffers';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <OurOffers></OurOffers>
            <NextTrip></NextTrip>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;