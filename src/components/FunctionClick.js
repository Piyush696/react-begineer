import React from 'react';


function functionClick() {
    function clickHandlr() {
        console.log('click')
    }
    return(
        <div>
            <button onClick={clickHandlr}>Click</button>
        </div>
    )
}

export default functionClick
