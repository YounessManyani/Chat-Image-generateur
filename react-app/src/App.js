import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatApp from './Component/ChatApp'; // Assurez-vous que le chemin est correct
import Login from './Component/Login'; // Assurez-vous que le chemin est correct
import Image from './Component/ImageGenerator';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
    return (
        <GoogleOAuthProvider clientId="842563992942-jbvtritgvsodf52a2dm44hgijnlcl5i8.apps.googleusercontent.com">
            <Router>
                <Routes>
                    {/* Utilisez element au lieu de component */}
                    <Route path="/" element={<Login />} />
                    <Route path="/chat" element={<ChatApp />} />
                    <Route path='/Image' element={<Image/>}/>
                </Routes>
            </Router>
        </GoogleOAuthProvider>
    );
};
export default App;