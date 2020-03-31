import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg'
import './styles.css'


import api from '../../services/api';
export default function Routes() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ngoId = localStorage.getItem('ngoId');

    const data = { title, description, value};

    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();
        try{
            await api.post('/incidents', data, {
                headers: {
                    Authorization: ngoId,
                },
            });
            history.push('/profile');
        } catch{
            alert('Error trying to register a new incident, try again.')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero Logo"/>
                    <h1> Register a new Incident </h1>
                    <p> Describe the details of a new case your NGO is taking care of.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041"></FiArrowLeft>
                        Back
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Incidents's title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Value" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit"> Register </button>
                </form>
            </div>
        </div>
    );
}