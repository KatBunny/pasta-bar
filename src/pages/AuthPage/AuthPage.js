import { useState } from 'react'
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import "./AuthPage.css"

export default function AuthPage({ setUser }) {
    
    const [showSignUp, setShowSignUp] = useState(false)
    
    return (
        <>
            <div className="welcome-page">
                <h1>iPasta</h1>
                <p>make your pasta dreams come true</p>
            </div>
            {showSignUp ? (
                <SignUpForm setUser={setUser} />
            ) : (
                <LoginForm setUser={setUser} />
            )}

                {showSignUp ? 
                    <>
                        <p>Already have an account? Login <a className="authpage-link" onClick={()=> setShowSignUp(!showSignUp)}>here</a></p>
                    </>
                : 
                <>
                    <p>First time ordering? Sign up <a className="authpage-link" onClick={()=> setShowSignUp(!showSignUp)}>here</a></p>
                </>}

        </>
    )
}