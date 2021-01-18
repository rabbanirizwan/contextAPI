import React from 'react';

const Controls = (props) =>{
    return(
        <div>
            <button onClick={props.strikes}>strike</button>
            <button onClick={props.balls}>ball</button>
            <button onClick={props.fouls}>foul</button>
            <button onClick={props.hits}>hit</button>
        </div>
    )
}
export default Controls