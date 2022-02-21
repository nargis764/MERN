//import React from 'react';
import React,{useState} from 'react';
import styles from "./Tabs.module.css";

const Tabs=(props) => {
const {tabs,setShowTabs} = props; 
const [activeButton, setActiveButton] = useState(null); 

const handleClick = (e,content,label,index) =>{  
setActiveButton(index);
e.preventDefault();
setShowTabs({content:content,label:label})     
}
    
return (
    <div>      
        {tabs.map((tab,index) =>{
            return (                
                    <button className={styles.btn} style={activeButton === index ? {backgroundColor:"black", color: "white"}: null} onClick={e=> handleClick(e,tab.content,tab.label,index)}>{tab.label}</button>
        )})}  
        
    </div>
)
} 

export default Tabs