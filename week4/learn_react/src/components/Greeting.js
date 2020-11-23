import React from 'react'



const Greeting = (props) => {
    console.log(props);
    return <h1 className="text-primary" style={{color: "blueviolet"}}>Hello {props.name}</h1>;
}

export default Greeting
