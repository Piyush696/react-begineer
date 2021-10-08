import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment:'',
            topic:''
        }
    }

    handlerUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlercommentChange = (event) => {
        this.setState({
            comment:event.target.value
        })
    }

    handlertopicChange= (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handlerSubmit= event => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <div>
                    <label>username</label>
                    <input type="text" value={this.state.username}
                        onChange={this.handlerUsernameChange} />
                </div>
                <div>
                    <label>comment</label>
                    <textarea type="text" value={this.state.comment}
                        onChange={this.handlercommentChange}></textarea>
                </div>
                <div>
                    <label>topic</label>
                    <select  value={this.state.topic}  onChange={this.handlertopicChange}>
                      <option value='Angular'>Angular</option> 
                      <option value='React'>React</option> 
                      <option value='Vue'>Vue</option>  
                    </select>
                </div>
                <button type='submit'>submit</button>
            </form>
        )
    }
}

export default Form
