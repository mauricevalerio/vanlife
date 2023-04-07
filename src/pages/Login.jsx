import { useState } from "react"

export default function Login() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setLoginData(prevLoginData => ({ ...prevLoginData, [name]: value }))
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        console.log("Submitted")
    }
    console.log(loginData.email, loginData.password)
    return (
        <>
            <h1 className="login">Sign in to your account!</h1>

            <form onSubmit={handleLoginSubmit} autoComplete="off" className="login">
                <input type="text" 
                name="email"
                value={loginData.email}
                onChange={handleInputChange}
                placeholder="Email address"/>

                <input type="password" 
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                placeholder="Password"/>

                <button>Sign in</button>
            </form>

            <p className="login-CTA">Don't have an account? <span className="orange">Create one now</span></p>
        </>
    )
}