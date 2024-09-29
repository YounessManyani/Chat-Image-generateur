import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Ajoutez useNavigate
import gptLogo from "../assets/chatgpt.svg";
import addBtn from '../assets/add-30.png';
import msgIcon from '../assets/message.svg';
import home from '../assets/home.svg';
import saved from '../assets/bookmark.svg';
import rocket from '../assets/rocket.svg';
import sendBtn from "../assets/send.svg";
import gptImgLogo from '../assets/chatgptLogo.svg';
import userIcon from '../assets/user-icon.png';
import LOGOgpt from "../assets/LOGOgpt.png"
import '../App.css'; // Import your stylesheet for styling
const ChatApp = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Hook pour naviguer
    const { user } = location.state || {};
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const handleSend = async () => {
        if (!input.trim()) return; // Prevent sending empty messages
        const userMessage = { role: 'user', content: input };
        setMessages(prevMessages => [...prevMessages, { ...userMessage, from: 'user' }]);
        try {
            const response = await fetch('http://localhost:8080/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: input }),
            });
            const data = await response.text();
            const botMessage = { role: 'assistant', content: data };
            setMessages(prevMessages => [...prevMessages, { ...botMessage, from: 'bot' }]);
            setInput(''); // Clear input field
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };
    const handleLogout = () => {
        navigate('/'); // Redirection vers la page de connexion (ou votre route de login)
    };
    return (
        <div className="App">
            <div className="sideBar">
                <div className="upperSide">
                    <div className="upperSideTop">
                        <img src={LOGOgpt} alt="Logo" className="logo" /><span className="brand"></span>
                    </div>
                    <button className="midBtn"><img src={addBtn} alt="" className="addBtn" />New Chat</button>
                    <div className="upperSideBottom">
                        <button className="query"><img src={msgIcon} alt="Query" />What is Programming?</button>
                        <button className="query"><img src={msgIcon} alt="Query" />How to use an API?</button>
                    </div>
                </div>
                <div className="lowerSide">
                    <div className="listItems"><img src={home} alt="" className="listItemsImg" />Home</div>
                    <div className="listItems"><img src={saved} alt="" className="listItemsImg" />Saved</div>
                    <div className="listItems">{/* Ajoutez le bouton de déconnexion ici */}
                        <button onClick={handleLogout} className="logoutButton">Déconnexion</button></div>
                </div>
            </div>
            <div className="main">
                <div className="chats">
                    {messages.map((msg, index) => (
                        <div key={index} className={`chat ${msg.from}`}>
                            <img className="chatImg" src={msg.from === 'user' && user ? user.picture : gptImgLogo} alt={msg.from} />
                            <p className="text">{msg.content}</p>
                        </div>
                    ))}
                </div>
                <div className="chatFooter">
                    <div className="inp">
                        <input type="text" placeholder="Send a message" value={input} onChange={(e) => setInput(e.target.value)} />
                        <button className="send" onClick={handleSend}><img src={sendBtn} alt="send" /></button>
                    </div>
                    <p>EPSIGPT may produce inaccurate information about people, places, or facts. EPSIGPT August 20 Version.</p>
                </div>
            </div>
        </div>
    );
};
export default ChatApp;