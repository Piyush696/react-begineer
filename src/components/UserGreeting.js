import React, { Component } from 'react';


class UserGreeting extends Component{

    constructor(props) {
        super(props)
        this.state = {
          isLoggedIn: false
        }
    }
    render(){

        return this.state.isLoggedIn ? (
            <div>welcome piyush</div>
        ) : (
            <div>welcome Quest</div>
        )


        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>hello Piyush</div>
        // } else{
        //     message = <div>hello Quest</div> 
        // }
        // return <div>{message}</div> 
        // return(
        //     <div>
        //        <div>Hello Piyush</div>
        //     </div>
        // )
    }
}

export default UserGreeting