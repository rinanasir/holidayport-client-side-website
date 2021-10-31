import React from 'react';
import { Carousel } from 'react-bootstrap';
import trip1 from '../../../images/moreTrips/trip1.png';
import trip2 from '../../../images/moreTrips/trip2.png';
import trip3 from '../../../images/moreTrips/trip3.png';

const NextTrip = () => {
    return (
        <>
            <div className="mx-5 my-5">
                <h1 className="text-warning fs-2 fw-bold">Get inspiration for your next trip</h1>
                <Carousel className="pb-5 px-5">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-100"
                            src={trip1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="bg-warning text-dark rounded-2 fw-bolder py-1">
                                <h3 className="fw-bolder">Vatican City</h3>
                                <p>World famous ancient city, carries thousands years of history</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={trip2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <div className="bg-warning text-dark rounded-2 fw-bolder py-1">
                                <h3 className="fw-bolder">Hot Air Ballon Ride</h3>
                                <p>Don't miss the chance to have a bird eye veiw</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={trip3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div className="bg-warning text-dark rounded-2 fw-bolder py-1">
                                <h3 className="fw-bolder">Best coffee cities in US</h3>
                                <p>If you love caffeine, this places is must for you</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default NextTrip;