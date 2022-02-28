import React,{useContext} from 'react'
import {NavbarContext} from "../App.js"
import styles from "./Nav.module.css"

const Form = () => {
const {name,setName} = useContext(NavbarContext);  
return (
    <div className={styles.form}> 
        <label>Your Name:</label>       
        <input className={styles.input} type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
)
}

export default Form
