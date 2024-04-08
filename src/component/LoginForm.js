import {React, useState, useContext, useEffect} from 'react';
import {AuthContext} from '../App';

function LoginForm({setSignup, signup}){
    const {authenticated, setAuthenticated} = useContext(AuthContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [Message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            setMessage('All fields are required');
        }
        else{
            fetch('http://127.0.0.1:5000/authentication', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({'username': username, 'password': password}),
            })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('User log-in failed. Please try again later.');
                }
            })
            .then(data => {
                setMessage(data.message)
                if (data.authenticated) {
                    setAuthenticated(true);
                }
                else if (!data.authenticated) {
                    setAuthenticated(false)
                }
            })
            .catch(error => setMessage(error.message));
        }
    };

    return(
        <div>
            <form class='loginForm' onSubmit={handleSubmit}>
                <p><u>You must first login before accessing the products page.</u></p>
                {Message && <h3>{Message}</h3>}
                <nobr>Username: </nobr>
                <input id='username' type="text" placeholder='Enter your Username' value={username} onChange={(arg) => setUsername(arg.target.value)}/>
                <br/>
                <nobr>Password: </nobr>
                <input id='password' type="password" placeholder='Enter your Password' value={password} onChange={(arg) => setPassword(arg.target.value)}/>
                <br/>
                <input type="submit" value="Login"/>
            </form>
            <button onClick={() => setSignup(!signup)}>Switch to Signup</button>
        </div>
    )
}

export default LoginForm;