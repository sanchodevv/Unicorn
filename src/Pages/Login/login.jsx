import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Hardcoded credentials for demo
        if (username === 'admin' && password === 'password') {
            setIsLoggedIn(true);
            navigate('/');
        } else {
            setError('Noto\'g\'ri login yoki parol');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <img src="./public/logo.png" alt="" />
                <h2>Welcome</h2>
                <div className="form-group">
                    <label htmlFor="username">Login</label>
                    <div className="input">
                        <img src="./public/user.png
                        " alt="" />
                        <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Parol:</label>
                    <div className="input">
                        <img src="./public/kulf.png" alt="" />
                        <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </div>
                </div>
                {error && <p className="error">{error}</p>}
                <button className='btn' type="submit">Kirish</button>
            </form>
        </div>
    );
};

export default Login;