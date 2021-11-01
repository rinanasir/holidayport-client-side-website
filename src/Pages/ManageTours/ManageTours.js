import React, { useEffect, useState } from 'react';

const ManageTours = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => setTours(data));
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/places/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = tours.filter(service => service._id !== id);
                    setTours(remaining);
                }
            })
    }

    return (
        <div>
            <h1 className="mt-5 text-warning fs-2 fw-bold">Manage Tours</h1>
            <div>
                {
                    tours.map(tour => <div key={tour._id} className="d-flex justify-content-center mb-3">
                        <h3>{tour.name}</h3>
                        <button onClick={() => handleDelete(tour._id)} className="btn btn-outline-warning ms-3">Remove Form List</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageTours;