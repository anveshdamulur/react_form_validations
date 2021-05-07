import React, { useState } from 'react'
import "./Login.css"
const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password : ""
    })
    const [login, setLogin] = useState(false);
    const [valid, setValid] = useState(false);

    const handleSubmit= (e) =>{
        e.preventDefault();
        if(values.email && values.password){
            setValid(true);
        }
        setLogin(true)
    }

    return (
        <div className="login">
            <form className="login__form" onSubmit={handleSubmit}>
                {login && valid ? <div className="login__message">Login Successfull</div> : null} 
                <input 
                    type="email"
                    placeholder="Your Email Id"
                    className="login__formField"
                    value={values.email}
                    onChange={e =>setValues({...values,email: e.target.value})}
                />
                {login && !values.email  ? <span className="login__warning">Enter your email address</span>: null}  
                <input 
                    type="password"
                    placeholder="password"
                    className="login__formField"
                    value={values.password}
                    onChange={e => setValues({...values, password : e.target.value})}    
                />
                {login && !values.password ? <span className="login__warning">Enter your password</span>: null}
                <button className="login__button">Login</button>
            </form>
        </div>
    )
}

export default Login
