import React from 'react';

const About = () => {
    return (
        <div>
            <div>
                <h1 className="text-warning fs-2 fw-bold mt-3">About Holidayport</h1>
                <h5>Holidayport's mission is to <span className="text-warning fw-bold">make it easier</span> for everyone to experience the world.</h5>
            </div>
            <div className="d-flex justify-content-evenly mx-5 px-5">
                <div>
                    <h4 className="text-warning fw-bold mt-5">What Holidayport Offers</h4>
                </div>
                <div className="text-start mt-5">
                    <h5 className="text-dark fw-bold">Incredible Selection</h5>
                    <p>Whether you want to stay in a chic city apartment, a luxury beach resort, or a cozy B&B in the countryside, Holidayport gives you amazing diversity and variety of choice – all in one place.</p>
                    <h5 className="text-dark fw-bold">Low Rates</h5>
                    <p>Holidayport guarantees to offer you the best available rates. And with our promise to price match, you can rest assured that you’re always getting a great deal.</p>
                    <h5 className="text-dark fw-bold">Instant Confirmation</h5>
                    <p>At Holidayport, every reservation is instantly confirmed. When you find your perfect stay, a few clicks are all it takes.</p>
                    <h5 className="text-dark fw-bold">No Reservation Fees</h5>
                    <p>We don’t charge you any booking fees or add any administrative charges. And in many cases, your booking can be canceled free of charge.</p>
                    <h5 className="text-dark fw-bold">Secure Booking</h5>
                    <p>We facilitate hundreds of thousands of transactions every day through our secure platform and work to the highest standards to guarantee your privacy.</p>
                    <h5 className="text-dark fw-bold">24/7 Support</h5>
                    <p>Whether you’ve just booked or are already enjoying your trip, our Customer Experience Team is available around the clock to answer your questions and advocate on your behalf.</p>
                </div>
            </div>
        </div>
    );
};

export default About;