// Arquivo: frontend/pages/register.js

import React, { useState } from 'react';

function RegisterPage() {
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Lógica de cadastro aqui
        console.log('Name:', name, 'CPF:', cpf, 'Password:', password);
    };

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                />
                <input
                    type="text"
                    value={cpf}
                    onChange={(e) => setCPF(e.target.value)}
                    placeholder="CPF"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;
