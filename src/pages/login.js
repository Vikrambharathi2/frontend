import React, { useState } from 'react';
import Admin from './admin'; 

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === process.env.REACT_APP_USERNAME && password === process.env.REACT_APP_PASSWORD) {
            setLoggedIn(true);
        } else {
            alert("Incorrect username or password!");
        }
    }
    if (loggedIn) {
        return <Admin />;
    }

    return (
        <form onSubmit={handleSubmit} className="container mt-5">
            <h1 className="mb-5">Admin Login</h1>
            <div className="mb-3">
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="username" placeholder="Username" className="form-control" />
            </div>
            <div className="mb-3">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    );
}
