import React from 'react';

let token = '';

function createToken(){
    token = sessionStorage.getItem('token');
    console.log(token);
}

class TableData extends React.Component{
    
    
    render(){
        return(
            <div>
                <button onClick={createToken()}>Token</button>
            </div>
        );
    }
}

export default TableData;