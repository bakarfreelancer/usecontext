import React, { useContext } from 'react'
import ValueContext from './ValueContext';

function Child(){
    let value = useContext(ValueContext);
    return(
        <div>Welcome value is {value[0]}</div>
    );
}
export default Child;