import React, {useState} from 'react';
import "./Form.css";

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [comparePassword, setComparePassword] = useState(false);

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("field must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("field must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("field must be at least 5 characters");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("field must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setComparePassword(true);
        setConfirmPassword(e.target.value);              
        if (e.target.value.length < 8) {
            setConfirmPasswordError("field must be at least 8 characters");
        } else {
            setConfirmPasswordError("");                     
        }
    }
   
return (
    <div>
        <form>
            <div className="info">
                <div className="first-name">
                    <label>First Name</label>
                    <input type="text" value={firstName} onChange={handleFirstName}/>
                </div>
                {firstNameError? <p className = "para-margin">{firstNameError}</p> : ''}                                
            </div>

            <div className="info">
                <div className="last-name">
                    <label>Last Name</label>
                    <input type="text" value={lastName} onChange={handleLastName}/>
                </div>
                {lastNameError? <p className = "para-margin">{lastNameError}</p> : ''} 
            </div>            
            
            <div className="info">
                <div className="email">
                    <label>Email</label>
                    <input type="email" value={email} onChange={handleEmail}/>
                </div>
                {emailError? <p className = "para-margin">{emailError}</p> : ''} 
            </div>            
            
            <div className="info">
                <div className="password">
                    <label>Password</label>
                    <input type="password" value={password} onChange={handlePassword}/>
                </div>
                {passwordError? <p className = "para-margin">{passwordError}</p> : ''} 
            </div>            
            
            <div className="info">
                <div className="confirm-password">
                    <label>Confirm Password</label>
                    <input type="password" value={confirmPassword} onChange={handleConfirmPassword}/>
                </div>
                {confirmPasswordError? <p className = "para-margin">{confirmPasswordError}</p> : ''} 
                {password !== confirmPassword && comparePassword && <p className = "para-margin">Passwords must match</p>}
            </div>

        </form>      
    </div>
    
)
}

export default Form