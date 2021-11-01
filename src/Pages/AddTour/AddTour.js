import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddTour = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        // console.log(data);
        axios.post('http://localhost:5000/places', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                }
            })
    };

    return (
        <div className="mx-5">
            <h1 className="text-warning fs-2 fw-bold mt-3">Add New Tour</h1>
            <div className="border border-secondary border-3 rounded-3 mx-5 py-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Place Name" className="border border-warning border-3 rounded-3 mb-4" />
                    <br />
                    <input type="number" {...register("Price")} placeholder="Price" className="border border-warning border-3 rounded-3 mb-4" />
                    <br />
                    <input {...register("Description")} placeholder="About" className="border border-warning border-3 rounded-3 mb-4" />
                    <br />
                    <input {...register("img")} placeholder="Image-URL" className="border border-warning border-3 rounded-3 mb-4" />
                    <br />
                    <input type="submit" className="border border-warning border-3 rounded-3 btn btn-warning" />
                </form>
            </div>
        </div>
    );
};

export default AddTour;