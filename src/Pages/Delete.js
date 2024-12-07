import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

const Delete = () => {
    const { clientID } = useParams();
    const [client, setclient] = useState({ id: '', name: '' });
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/client/${clientID}`);
            setclient(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
            alert("Failed to fetch client data");
        }
    };

    const deleteData = async () => {
        if (window.confirm("Are you sure you want to delete this client?")) {
            try {
                await axios.delete(`http://localhost:8000/client/${clientID}`);
                alert('Data deleted successfully');
                navigate("/show");
            } catch (error) {
                console.error("Error deleting data:", error);
                alert("Failed to delete data");
            }
        }
    };

    useEffect(() => {
        getData();
    }, [clientID]);

    return (
        <div>
            <h2>Delete Data For</h2>
            <h2>ClientID: {client.id}</h2>
            <h2>Name: {client.name}</h2>
            <div>
                <button onClick={deleteData} className="btn btn-danger me-2">YES</button>
                <NavLink to="/show">
                    <button className="btn btn-warning">NO</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Delete;
