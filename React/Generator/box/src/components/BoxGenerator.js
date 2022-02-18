import React from 'react';
import styles from "./BoxGenerator.module.css";
import styled from 'styled-components';

const StyledDiv = styled.div`
background-color:${({color}) => color};
height:${({height}) => height +'px'};
width:${({width}) => width +'px'};
margin:0px auto;
`;

const BoxGenerator = (props) => {
const {generateBox} = props;  
return (
    <div className={styles.container}>
        {generateBox.map((box,index)=>{
            return (
                <StyledDiv color={box.color} height={box.height} width={box.width}></StyledDiv>
            )
            
        })}
    </div>
)
}

export default BoxGenerator