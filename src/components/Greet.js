import React from 'react'


// function Greet() {
//     return <h1> Hello Piyush</h1>
// }

// const Greet = ( ) => <h1>Hello Piyush11</h1>
const Greet = (props ) =>{
    console.log(props)
   return(
       <div>
<h1>Hello Piyush1{props.name} a.k.a {props.heroName} </h1>
{props.children}
       </div>

   ) 
}


export default Greet