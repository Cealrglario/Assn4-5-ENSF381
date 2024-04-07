import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';

function LoginForm({setSignup, signup}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [Message, setMessage] = useState('');
    const [authenticated, setAuthenticated] = useState(false)
    const navigate = useNavigate()
    
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
                    // Set authenticated to true after a moment for to allow user to read message
                    setTimeout(() => {
                        setAuthenticated(true);
                    }, 1000);
                }
                else if (!data.authenticated) {
                    setAuthenticated(false)
                }
            })
            .catch(error => setMessage(error.message));
        }
    };

    if (authenticated) {
        navigate("/Productpage")
    }

    return(
        <div>
            <form class='loginForm' onSubmit={handleSubmit}>
                {Message && <p>{Message}</p>}
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