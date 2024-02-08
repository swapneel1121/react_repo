import React, { useState } from 'react';
import axios from 'axios';

function App() {
	const [message, setMessage] = useState('');

	const fetchMessage = async () => {
	const response = await axios.get('http://localhost:5000/api/message');
	setMessage(response.data.message)
    };

    return (
        <div ClassName = "App">
            <header className = "AppHeader">
                <p>{message}</p>
                <button onClick={fetchMessage}>Get Message</button>
            </header>
        </div>
    );
}

export default App;