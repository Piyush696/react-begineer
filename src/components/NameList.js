import React from 'react';
import Name from './Name';


function NameList() {
 const names = ['piyush','dutta', 'wdewdewd']
 const namelist = names.map(name => <Name name={name}></Name>)
return <div>{namelist}</div>
}

export default NameList