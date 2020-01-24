import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

const AddSmurf = props => {
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState();
    const [newHeight, setNewHeight] = useState('');

    const handleNameChanges = e => {
        setNewName(e.target.value)
    }

    const handleAgeChanges = e => {
        setNewAge(e.target.value)
    }

    const handleHeightChanges = e => {
        setNewHeight(e.target.value)
    }

    const newData = {
        name: newName,
        age: Number(newAge),
        height: newHeight
    }

    console.log(newData);
    const handleAdd = e => {
        e.preventDefault();
        props.addSmurf(newData);
    }

    return (
        <div>
            <h2>Move a new Smurf to this Village!</h2>
                <form method="post">
                    <input
                        required
                        className='name-input'
                        type='text'
                        name='newName'
                        onChange={handleNameChanges}
                    />
                    <input
                        required
                        className='age-input'
                        type='number'
                        name='newAge'
                        onChange={handleAgeChanges}
                    />
                    <input
                        required
                        className='height-input'
                        type='text'
                        name='newHeight'
                        onChange={handleHeightChanges}
                    />
                    <button type="submit" onClick={handleAdd}>Add Smurf</button>
                </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        addLoading: state.addLoading,
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, { addSmurf })(AddSmurf);