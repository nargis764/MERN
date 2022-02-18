import React,{useReducer} from 'react'

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

const reducer = (state,action) => {

switch(action.type) {
    case 'UPDATE': 
    const {name,value} = action.payload;
        return {
            ...state,
            [name]:{...state[name],value}
        } 
    default:
        return state              
}
}

const Form = (props) => {

const [state,dispatch] = useReducer(reducer,initialState);

const handleChange = (e) => {
    const {name,value} = e.target;
    dispatch({
        type:'UPDATE', 
        payload:{name,value}
    })
} 

/* const handleLastName = (e) => {
    const {name,value} =e.target;
    dispatch({
        type:'UPDATE', 
        payload:{name, value}
        })
} 

const handleEmail = (e) => {
    const {name,value} =e.target;
    dispatch({
        type:'UPDATE', 
        payload:{name, value}
        })
}  */

return (
    <form onSubmit = {(e) => e.preventDefault()}>
        <div>
            <label>First Name</label>
            <input 
                type="text" 
                name="firstName"
                value={state.firstName.value} 
                onChange={handleChange}/>
        </div>
        <p>First Name: {state.firstName.value}</p>
        <div>
            <label>Last Name</label>
            <input 
                type="text" 
                name="lastName"
                value={state.lastName.value} 
                onChange={handleChange}/>
        </div>
        <p>Last Name: {state.lastName.value}</p>
        <div>
            <label>Email</label>
            <input 
                type="email" 
                name="email"
                value={state.email.value} 
                onChange={handleChange}/>
                <p>Email: {state.email.value}</p>
        </div>   
        <input type="submit"/>    
        
    </form>
)
}

export default Form;
