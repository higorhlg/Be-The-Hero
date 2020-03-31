import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import './styles.css';


import api from '../../services/api';
export default function Profile() {
    const ngoId = localStorage.getItem('ngoId');
    const ngoName = localStorage.getItem('ngoName');

    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    useEffect(() => {
        api.get('/profile', {
            headers: {
                Authorization: ngoId
            }
        }).then(res => {
            setIncidents(res.data);
        })
    }, [ngoId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers:{
                    Authorization: ngoId,
                }
            })
            setIncidents(incidents.filter( incident => incident.id !== id));
        }
        catch (err) {
            alert ("Error deleting, try again");
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero Logo"/>
                <span> Welcome, {ngoName}.</span>

                <Link className="button" to="/incidents/new">
                    Register a new Incident
                </Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1> Active Cases </h1>
                <ul>
                    {incidents.map(incident => (
                        <li key={incident.id}>
                            <strong> CASE: </strong>
                            <p>{incident.title}</p>

                            <strong> DESCRIPTION: </strong>
                            <p>{incident.description}</p>

                            <strong> VALUE: </strong>
                            <p>{Intl.NumberFormat('en-US', 
                            { style: 'currency', currency:'USD'})
                            .format(incident.value)}</p>
                            <button onClick={ () => handleDeleteIncident(incident.id)}>
                                <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
                            </button>
                        </li>

                    ))}
                </ul>
        </div>
    );
}