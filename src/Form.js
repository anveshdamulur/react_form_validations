import React, {useState} from 'react'
import "./Form.css"
const Form = () => {
    const [values, setValues] = useState({
        firstName : "",
        lastName : "",
        email : ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleSubmit = e =>{
        e.preventDefault();
        if(values.firstName && values.lastName && values.email){
            setValid(true);
        }
        setSubmitted(true)
    }
    return (
        <div className="form-container">
            <form className="register-form" onSubmit={handleSubmit}>
             {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}   
                <input type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={e =>{setValues({...values, firstName: e.target.value})}}
                    placeholder="First Name"
                    className="form-field"
                />
        
               {submitted && !values.firstName ? <span className="warning-message">Please enter a first name</span>:null} 
                <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name"
                    className="form-field"
                    value={values.lastName}
                    onChange={e =>{setValues({...values, lastName: e.target.value})}}                
                />
              {submitted && !values.lastName ?<span className="warning-message">Please enter a last name</span> : null }  
                <input 
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-field"
                    value={values.email}
                    onChange={e =>{setValues({...values, email: e.target.value})}}
                />
               {submitted && !values.email ? <span className="warning-message">Please enter a email address</span> : null}
               
                <button className="form-button">Register</button>
            </form>
        </div>
    )
}

export default Form
