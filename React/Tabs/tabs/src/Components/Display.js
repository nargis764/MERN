import React from 'react'
import styles from "./Tabs.module.css";

const Display = (props) => {
const {showTabs} = props;
return (
    <div>  
    <p className={styles.message}>{showTabs.content}</p>            
    </div>
)
}

export default Display