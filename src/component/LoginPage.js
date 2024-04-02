import {React, useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

function LoginPage() {
    const [signup, setSignup] = useState(false);
    
    if(signup){
        return (
            <div>
                <Header />
                <SignupForm setSignup = {setSignup} signup = {signup}/>
                <Footer />
            </div>
        )
    }
    else{
        return (
            <div>
                <Header />
                <LoginForm setSignup = {setSignup} signup = {signup}/>
                <Footer />
            </div>
        )
    }
}

export default LoginPage;