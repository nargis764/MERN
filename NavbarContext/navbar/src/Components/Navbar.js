import React,{useContext} from 'react'
import {NavbarContext} from "../App.js"
import styles from "./Nav.module.css"

const Navbar = () => {
    const {name} = useContext(NavbarContext);
return (
    <div className={styles.navbar}>
        <h2>Hi, {name}</h2>
    </div>
)
}

export default Navbar