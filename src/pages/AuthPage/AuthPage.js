import { useState } from 'react'
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"

export default function AuthPage({ setUser }) {
    
    const [showSignUp, setShowSignUp] = useState(false)
    
    return (
        <>
            {showSignUp ? (
                <SignUpForm setUser={setUser} />
            ) : (
                <LoginForm setUser={setUser} />
            )}
            <a onClick={()=> setShowSignUp(!showSignUp)}>
                {showSignUp ? 'Already have an account? Login' : 'First time ordering? Sign up here'}
            </a>
        </>
    )
}