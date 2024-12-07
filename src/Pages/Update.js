import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const { register, handleSubmit, setValue } = useForm();
    const { clientID } = useParams();
    const navigate = useNavigate();

    // Fetch client data to pre-fill the form
    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/client/${clientID}/`);
            setValue('id', response.data.id);
            setValue('name', response.data.name);
            setValue('company', response.data.company);
            setValue('email', response.data.email);
            setValue('contact', response.data.contact);
            setValue('role', response.data.role);
        } catch (error) {
            console.error('Error fetching client data:', error);
            alert('Failed to fetch client data.');
        }
    };

    useEffect(() => {
        getData();
    }, [clientID]);

    // Handle form submission
    const updateData = async (data) => {
        try {
            await axios.put(`http://localhost:8000/client/${clientID}/`, data);
            alert('Data updated successfully!');
            navigate('/show');
        } catch (error) {
            console.error('Error updating data:', error);
            alert('Failed to update data.');
        }
    };

    return (
        <div>
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black">
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update Client</p>
                                            <form className="mx-1 mx-md-4" onSubmit={handleSubmit(updateData)}>
                                                <div className="mb-4">
                                                    <label className="form-label" htmlFor="id">Client ID</label>
                                                    <input type="text" id="id" className="form-control" {...register('id')} disabled />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="form-label" htmlFor="name">Your Name</label>
                                                    <input type="text" id="name" className="form-control" {...register('name')} />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="form-label" htmlFor="company">Company Name</label>
                                                    <input type="text" id="company" className="form-control" {...register('company')} />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="form-label" htmlFor="email">Your Email</label>
                                                    <input type="email" id="email" className="form-control" {...register('email')} />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="form-label" htmlFor="contact">Contact</label>
                                                    <input type="text" id="contact" className="form-control" {...register('contact')} />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="form-label" htmlFor="role">Role</label>
                                                    <input type="text" id="role" className="form-control" {...register('role')} />
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <button type="submit" className="btn btn-primary btn-lg">Update</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid"
                                                alt="Sample"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Update;
