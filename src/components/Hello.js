import React from 'react';

const Hello = () => {
    // return ( <
    //     div >
    //     <
    //      h1 > Hello Piyush < /h1> <
    //     /div>
    // )
    return React.createElement('div',null,React.createElement('h1',null,'Good Morning Piyush'))
}


export default Hello