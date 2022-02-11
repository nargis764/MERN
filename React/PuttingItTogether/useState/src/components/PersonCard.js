import React, {useState} from 'react'

const PersonCard = (props) => {

const {firstName, lastName, initialAge, hairColor} = props;
const [age, setAge] = useState(initialAge);

return (
    <div>
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick = {() => setAge(age + 1)}>Birthday Button for {firstName} {lastName}</button>
    </div>
)
}
export default PersonCard