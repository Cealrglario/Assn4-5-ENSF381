import {React, useState} from 'react';



function LoginForm({setSignup, signup}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [Message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            setMessage('All fields are required');
        }
        else{
            setMessage('');
        }
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