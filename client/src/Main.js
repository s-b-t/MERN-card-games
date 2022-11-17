import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Main = () => {
    const [message, setMessage] = useState('Loading...');

    useEffect( () => {
        axios.get('http://localhost:8000/')
            .then(response => {
                setMessage(response.data.message)
        })
    }, [])
    
    return (
        <div>
            <h2>Message from the backend: {message}</h2>
        </div>
    )
}

export default Main;