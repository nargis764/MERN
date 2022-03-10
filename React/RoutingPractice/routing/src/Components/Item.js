import React from 'react'
import {useParams} from "react-router-dom"


const Item=()=> {
    const {item,color1,color2,color3} = useParams();
  return (
  <div>
    { isNaN(item)? 
    <p style={{color:color1, backgroundColor:color2, textShadow: `1px 1px ${color3}`}}>The word is: {item}</p>:
    <p>The number is: {item}</p>
    }
  </div>   
    
  )
}

export default Item