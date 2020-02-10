import React from 'react';

const Smurf = props => {
    return (
        <div className='smurf-door'>
            <div className='smurf-nameplate'>
                <h3>{props.smurf.name} lives here.</h3>
                <h4>They're {props.smurf.height} tall.</h4>
                <h4>They're {props.smurf.age} years old!</h4>
                <h3>Welcome!</h3>                
            </div>
        </div>
    )
}

export default Smurf;