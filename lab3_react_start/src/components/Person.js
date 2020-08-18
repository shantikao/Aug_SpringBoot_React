import React, { useState } from 'react'

// export default function Person() {
//     return (
//         <div>
//             <p>i am groot</p>
//         </div>
//     )
// }

const Person = props => {
    const [stateString, changeString] = useState({
        publisher: "Marvel University",
        studio: "Disney"
    })
    const switchVenderHandler = () => {
        changeString({
            publisher: "DC Universe",
            studio: stateString.studio
        })
    }
    const showStatusHandler = () => {
        console.log(stateString)
    }
    return (
        <div>
            <button onClick={switchVenderHandler}>Change!</button>
            <button onClick={showStatusHandler}>Show!</button>
            <h1>{stateString.publisher}</h1>
            <p>I am {props.name}</p>
            <p>I am {props.age} years old,</p>
            <p>I am the {Math.floor(Math.random() * 5)} th generation</p>
            <p style={{ color: "red" }}>My job function is {props.children}</p>
        </div>

    )
}

export default Person