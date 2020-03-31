import React, { useState } from 'react'
import { FiLogIn } from 'react-icons/fi'

import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'


import api from '../../services/api';
export default function Logon(){
    const [id, setId] = useState('');

    const history = useHistory();
    async function handleLogin(e) {
        e.preventDefault();

        try {
            const res = await api.post('sessions', {id})
            localStorage.setItem('ngoId', id);
            localStorage.setItem('ngoName', res.data.name);
            history.push('/profile');
        } catch {
            alert('LogIn Failed!');
        }
    }
    
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero Logo"></img>
                <form onSubmit={handleLogin}>  
                    <h1>Log In</h1>
                    <input placeholder="Your ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button"> Log In</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041"></FiLogIn>
                        I don't have a ID
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"></img>
        </div>
    );
}

