import React, {useState} from 'react';
import "./Form.css";

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    
return (
    <div>
        <form>

            <div className="info">
                <label>First Name</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            
            <div className="info">
                <label>Last Name</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </div>

            <div className="info">
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            
            <div className="info">
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>            
            
            <div className="info">
                <label>Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>

        </form>
        
        <p>Your Form Data</p>
        <div className="display-info">
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
        
    </div>
    
)
}

export default Form