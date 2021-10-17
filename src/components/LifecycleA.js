import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Piyush'
        }
        console.log('lifecycleA constructor')
    }


    static getDerivedStateFromProps(props, state) {
        console.log('lifecycleA getDerivedStateFromProp')
        return null
    }

    componentDidMount() {
        console.log('lifecycleA componentDidMount')
    }

    render() {
        console.log('lifecycleA   render')
        return (
            <div>lifecycleA
            <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
