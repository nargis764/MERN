import React,{useState} from 'react'
import styles from "./BoxGenerator.module.css";

const Form = (props) => {
const {generateBox,setGenerateBox} = props;

const [color,setColor] = useState("");
const [height,setHeight] = useState(0);
const [width,setWidth] = useState(0);

const handleSubmit = (e) => {
    e.preventDefault();
    /*the css supports command with the color property avoids creating 
    unnecessary empty spaces when the color name is invalid*/
    if(CSS.supports("color",color) && height>0 && width>0) {
    setGenerateBox([...generateBox,{color:color,height:height,width:width}])
    } else {
        setGenerateBox([...generateBox])
    }
    
    setColor("");
    setHeight("");
    setWidth("");
}

return (
    <div>
        <form className = {styles.form} onSubmit= {handleSubmit}>
            <div className = {styles.formElement}>
                <label>Color</label>
                <input className = {styles.formInput}
                type="text" 
                value={color} 
                onChange={(e)=>setColor(e.target.value)}
            />

            </div>
            
            <div className={styles.formElement}>
                <label>Height</label>
                <input className={styles.formInput}
                type="number" 
                value={height} 
                onChange={(e)=>setHeight(e.target.value)}
                />
            </div>
            
            <div className={styles.formElement}>
                <label>Width</label>
                <input className = {styles.formInput}
                type="number" 
                value={width} 
                onChange={(e)=>setWidth(e.target.value)}
                />
            </div>    
            <button className={styles.btn}>Add</button>
        </form>        
    </div>
)
}

export default Form