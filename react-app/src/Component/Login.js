import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [user, setUser] = useState(null); 
    const navigate = useNavigate();

    const handleLoginSuccess = (credentialResponse) => {
        const userData = credentialResponse.credential;
        const userObject = JSON.parse(atob(userData.split('.')[1]));

        setUser(userObject);
        navigate('/chat');
    };

    const handleLoginError = () => {
        console.error('Échec de l’authentification');
    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <div className="login-container">
            {user ? (
                <div className="user-info">
                    <h1>Bienvenue, {user.name}</h1>
                    <img src={user.picture} alt="User Avatar" className="user-avatar" />
                    <button className="logout-btn" onClick={handleLogout}>Log Out</button>
                    <button className="upgrade-btn" onClick={() => alert('Upgrade to Pro functionality coming soon!')}>
                        Upgrade to Pro
                    </button>
                </div>
            ) : (
                <div className="login-box">
                    <h1 className="login-title">Connectez-vous avec Google</h1>
                    <GoogleLogin
                        onSuccess={handleLoginSuccess}
                        onError={handleLoginError}
                    />
                </div>
            )}
        </div>
    );
};

export default Login;
