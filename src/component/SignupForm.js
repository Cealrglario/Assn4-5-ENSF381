import {React, useState} from 'react';

function SignupForm({setSignup, signup}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [Message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username || !password || !email || !confirmPassword) {
            setMessage('All fields are required');
        }
        else if(password !== confirmPassword){
            setMessage('Passwords do not match');
        }
        else{
            setMessage('User Created Successfully');
            // Add code here later
        }
    }



    return(
        <div>
            <form class='SignupForm' onSubmit={handleSubmit}>
                {Message && <p>{Message}</p>}
                <nobr>Username: </nobr>
                <input id='username' type="text" placeholder='Enter your Username' value={username} onChange={(arg) => setUsername(arg.target.value)}/>
                <br/>
                <nobr>Password: </nobr>
                <input id='password' type="password" placeholder='Enter your Password' value={password} onChange={(arg) => setPassword(arg.target.value)}/>
                <br/>
                <nobr>Confirm Password : </nobr>
                <input type="password" placeholder='Re-Enter your Password' value={confirmPassword} onChange={(arg) => setConfirmPassword(arg.target.value)}/>
                <br/>
                <nobr>Email: </nobr>
                <input type="text" placeholder='Enter your Email' value={email} onChange={(arg) => setEmail(arg.target.value)}/>
                <br/>
                <input type="submit" value="Signup"/>
            </form>
            <button onClick={() => setSignup(!signup)}>Switch to Login</button>
        </div>
    )
}
export default SignupForm;