import { useState } from 'react'
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import "./AuthPage.css"

export default function AuthPage({ setUser }) {
    
    const [showSignUp, setShowSignUp] = useState(false)
    
    return (
        <>
            {showSignUp ? (
                <SignUpForm setUser={setUser} />
            ) : (
                <LoginForm setUser={setUser} />
            )}

                {showSignUp ? 
                    <>
                        <p>Already have an account? <a className="authpage-link" onClick={()=> setShowSignUp(!showSignUp)}>Login here</a></p>
                    </>
                : 
                <>
                    <p>First time ordering? Sign up <a className="authpage-link" onClick={()=> setShowSignUp(!showSignUp)}>here</a></p>
                </>}

        </>
    )
}