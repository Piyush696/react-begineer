import React from 'react'
import './myStyle.css'

const heading = {
    fontSize : '72px',
    color: 'blue'
}

function Stylesheet(props) {
    let className = props.primary ? 'primary': ''
    return (
        <div>
            <h1 className={className}>Stylesheet</h1>
            {/* <h1 className="primary">Stylesheet</h1> */}
            <h1 className={`${className} font-xl`}>Stylesheet</h1>

            <h1 style={heading}>inline</h1>
        </div>
    )
}

export default Stylesheet
