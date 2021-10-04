import React, { Component } from 'react';
import { Children } from 'react';
import ChildComponent from './ChildComponent';


class ParentComponent extends Component{
    constructor(props) {
        super(props)
        this.state = {
           message: 'Parent'
        }
        
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        alert(`hello ${this.state.message}`)
    }
    render(){
        return(
            <div>
                <ChildComponent greetHandler={this.clickHandler}></ChildComponent>
            </div>
        )
    }
}


export default ParentComponent